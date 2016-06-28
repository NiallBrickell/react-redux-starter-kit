import promiseMiddleware from 'redux/middleware/promise';

describe('(Middleware) Promise', () => {
	it('Should be a function.', () => {
		expect(promiseMiddleware).to.be.a('function');
	});

	describe('Dispatching through the promise middleware', () => {
		let _inject, // Injected from createStore in reality
			_dispatch,
			_getState,
			_next,
			_afterFunc,
			_promise_then,
			_promise_catch,
			_testAction;

		beforeEach(() => {
			_dispatch = sinon.spy(),
			_getState = sinon.spy(),
			_next = sinon.spy(),
			_afterFunc = sinon.spy(),
			_promise_then = sinon.stub(),
			_promise_catch = sinon.stub(),
			_inject = {
				testMethod: () => ({
					then: _promise_then,
					catch: _promise_catch
				})
			},
			_testAction = {
				types: ['TEST_ACTION_1', 'TEST_ACTION_2', 'TEST_ACTION_3'],
				promise: (client) => client.testMethod(), // Returns a (fake) promise. client will be _inject
				then: _afterFunc
			};
			_promise_then.callsArgWith(0, 'testResolve').returns(_inject.testMethod());
			_promise_catch.callsArgWith(0, 'testCatch');

			promiseMiddleware(_inject)({dispatch: _dispatch, getState: _getState})(_next)(_testAction);
		});

		it('Should call next() with TEST_ACTION_1 on start', () => {
			expect(_next).to.have.been.calledWith({
				type: 'TEST_ACTION_1'
			});
		});

		it('Should call next() with action type TEST_ACTION_2 (the resolved action)', () => {
			expect(_next).to.have.been.calledWith({
				type: 'TEST_ACTION_2',
				result: 'testResolve'
			});
		});

		it('Should call a then afterFunc if it\'s passed', () => {
			expect(_afterFunc).to.have.been.calledOnce;
			expect(_dispatch).to.have.been.calledWith(_afterFunc());
		});
	});
});