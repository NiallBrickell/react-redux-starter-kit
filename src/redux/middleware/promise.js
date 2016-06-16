export default function promiseMiddleware(...inject) {
	return ({dispatch, getState}) => next => action => {
		let {types, promise: promiseFunc, then: afterFunc, ...other} = action;
		// If there's no promiseFunc, we're dispatching a normal action.
		if (!promiseFunc) return next(action);

		// Get action types from types array passed in
		const [STARTED, RESOLVED, FAILURE] = types;

		// Dispatch a REQUEST started action
		next({
			type: STARTED,
			...other
		});

		// Inject paramaters - could be API library or other lib promise needs
		const promise = promiseFunc(...inject);
		// Resolve the promise
		promise.then((res) => {
			next({
				type: RESOLVED,
				result: res,
				...other
			});
			if(afterFunc) return dispatch(afterFunc());
			else return;
		}).catch((err) => {
			return next({
				type: FAILURE,
				error: err,
				...other
			});
		});

	// TODO: return promise?
	// return promise;
	};
}