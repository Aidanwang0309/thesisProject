import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from "graphql-request";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { fetchUser, isLoggedIn } from "../../actions";
import { ME_QUERY } from "../../graphql/queries";

class Login extends Component {
	render() {
		const { Auth, classes, isLoggedIn } = this.props;

		const onSuccess = async googleUser => {
			try {
				const idToken = googleUser.getAuthResponse().id_token;
				const client = new GraphQLClient("http://localhost:5000/graphql", {
					headers: { authorization: idToken }
				});
				const { me } = await client.request(ME_QUERY);
				Auth(me);
				isLoggedIn(googleUser.isSignedIn());
			} catch (err) {
				onFailure(err);
			}
		};

		const onFailure = err => {
			console.log("Error logging in", err);
		};

		return (
			<div className={classes.root}>
				<Typography component="h1" variant="h3" gutterBottom noWrap>
					{" "}
					Welcome{" "}
				</Typography>
				<GoogleLogin
					clientId="542906713523-4ooq9ujermfde0qm832lu16uf6juj32q.apps.googleusercontent.com"
					onSuccess={onSuccess}
					onFailure={onFailure}
					isSignedIn={true}
					buttonText="Login with Google"
				/>
			</div>
		);
	}
}

const styles = {
	root: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center"
	}
};

const mapStateToProps = state => {
	return { currentUser: state.auth.currentUser };
};

const mapDispatchToProps = dispatch => {
	return {
		Auth: value => {
			dispatch(fetchUser(value));
		},
		isLoggedIn: value => {
			dispatch(isLoggedIn(value));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Login));
