import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
	return (
		<Route
			render={props =>
				!isAuth ? <Redirect to="/login" /> : <Component {...props} />
			}
			{...rest}
		/>
	);
};

const mapStateToProps = state => {
	return { isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps)(ProtectedRoute);
