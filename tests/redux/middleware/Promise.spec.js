import promiseMiddleware from 'redux/middleware/promise';

describe('(Middleware) Promise', () => {
	it('Should be a function.', () => {
		expect(promiseMiddleware).to.be.a('function');
	});

	describe('Dispatching through the promise middleware', () => {
		let _dispatch,
			_getState,
			_next,
			_testAction,
			_action,
			_actionSpy;

		beforeEach(() => {
			_dispatch = sinon.spy(),
			_getState = sinon.spy(),
			_next = sinon.spy(),
			_promise = sinon.spy(),
			_testAction = {
				types: ['TEST_ACTION_1', 'TEST_ACTION_2', 'TEST_ACTION_3'],
				promise: _promise
			},
			_inject = sinon.stub();
			_promise.withArgs(_inject).returns(_inject(_testAction)); //TODO

			promiseMiddleware({_dispatch, _getState})(_next)(_action);
		});

		it('Should call the function passed to dispatch.', () => {
			expect(_action).to.have.been.calledOnce;
		});

		it('Should return a "TEST_ACTION" action from the function passsed.', () => {
			//WHY'S THIS PASSING??
			expect(_dispatch).to.have.been.calledWith(_testAction);
		});
	});
});