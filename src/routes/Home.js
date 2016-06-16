import { injectReducer } from '../redux/reducers';

export default (store) => ({
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			const HomeView = require('../components/Home/Home').default;

			// Posts is used all over the app, so make it a global[?] reducer
			// const postsReducer = require('../redux/modules/Posts').default;
			
			// injectReducer(store, {
			// 	key: 'posts',
			// 	reducer: postsReducer
			// });

			cb(null, HomeView);

		}, 'home');
	}
});
