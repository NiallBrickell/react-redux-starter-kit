import createStore from 'redux/createStore';
import { makeRootReducer, injectReducer } from 'redux/reducers.js';

let _globalState;

describe('(Redux) Creating a store', () => {
	it('Should be a function', () => {
		expect(createStore).to.be.a('function');
	});

	describe('Returning a store', () => {
		_globalState = {
			store: createStore()
		};

		it('Should have initial state', () => {
			expect(_globalState.store.getState()).to.have.all.keys('router');
		});
	});
})

describe('(Redux) Reducers', () => {
	it('Should export makeRootReducer', () => {
		expect(makeRootReducer).to.be.a('function');
	});
	it('Should export injectReducer', () => {
		expect(injectReducer).to.be.a('function');
	});

	describe('Make root reducer', () => {
		let reducer;
		beforeEach(() => {
			// Setup a new root reducer
			reducer = makeRootReducer()();
		});

		it('Should return the initial reducer', () => {
			reducer.should.have.any.keys('router');
		});
	});

	describe('Inject a Reducer', () => {
		it('Should be able to inject a reducer', () => {
			injectReducer(_globalState.store, {
				key: 'testInjectReducer',
				reducer: (state, action) => state ? state : {}
			});
			expect(_globalState.store.asyncReducers.testInjectReducer).to.exist;
		});
	})
});