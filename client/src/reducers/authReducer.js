import { FETCH_USER, IS_LOGGED_IN } from "../actions/types";

const INITIAL_STATE = {
	currentUser: null,
	isAuth: false
};

export default function(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case FETCH_USER:
			return { ...state, currentUser: payload };
		case IS_LOGGED_IN:
			return { ...state, isAuth: payload };
		default:
			return state;
	}
}
