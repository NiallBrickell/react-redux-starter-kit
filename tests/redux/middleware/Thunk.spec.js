import thunkMiddleware from 'redux/middleware/thunk';

describe('(Middleware) Thunk', () => {
	it('Should be a function.', () => {
		expect(thunkMiddleware).to.be.a('function');
	});

	describe('Dispatching through the thunk middleware', () => {
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
			_testAction = {
				type: 'TEST_ACTION'
			},
			_action = sinon.stub();
			_action.withArgs({_dispatch, _getState}).returns(_dispatch(_testAction));

			thunkMiddleware({_dispatch, _getState})(_next)(_action);
		});

		it('Should call the function passed to dispatch.', () => {
			expect(_action).to.have.been.calledOnce;
		});

		it('Should return a "TEST_ACTION" action from the function passsed.', () => {
			expect(_dispatch).to.have.been.calledWith(_testAction);
		});
	});
});