// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MOB_NAV = 'SHOW_HIDE_MOB_NAV';

// ------------------------------------
// Action Creators
// ------------------------------------
export const showHideMobNav = () => {
	return (dispatch, getState) => {
		dispatch({
			type: SHOW_HIDE_MOB_NAV,
			payload: !(getState().nav.showMobNav)
		});
	};
};

// Actions
export const actions = {
	showHideMobNav
};

// ------------------------------------
// Action Handlers for Reducer
// ------------------------------------
const ACTION_HANDLERS = {
	[SHOW_HIDE_MOB_NAV]: (state, action) => {
		return {
			...state,
			showMobNav: action.payload
		};
	}
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
	showMobNav: false
};
export default function navReducer(state = initialState, action = {}) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
