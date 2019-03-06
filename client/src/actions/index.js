// import axios from 'axios';
import { FETCH_USER, IS_LOGGED_IN } from "./types";

export const fetchUser = user => {
	// async
	return { type: FETCH_USER, payload: user };
};

export const isLoggedIn = state => {
	return { type: IS_LOGGED_IN, payload: state };
};
