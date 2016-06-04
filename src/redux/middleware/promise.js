export default function promiseMiddleware(...inject) {
	return ({dispatch, getState}) => next => action => {
		let {promise: promiseFunc, types} = action;

		// If there's no promiseFunc, we're dispatching a normal action.
		if (!promiseFunc) return next(action);

		// Get action types from types array passed in
		const [STARTED, RESOLVED, FAILURE] = types;

		// Dispatch a REQUEST started action
		next({
			type: STARTED
		});

		// Inject paramaters - could be API library or other lib promise needs
		const promise = promiseFunc(...inject);
		// Resolve the promise
		promise.then((res) => {
			return next({
				result: res,
				type: RESOLVED
			});
		}).catch((err) => {
			return next({
				error: err,
				type: FAILURE
			})
		});

		// TODO: return promise?
		// return promise;
	}
}