import React, { Component } from "react";
import Login from "../components/Auth/Login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Splash = ({ isAuth }) => {
	return isAuth ? <Redirect to="/" /> : <Login />;
};

const mapStateToProps = state => {
	return { isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps)(Splash);
