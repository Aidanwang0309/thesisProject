import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Splash from "./pages/Splash";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import ProtectedRoute from "./protectedRoute";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	{},
	composeEnhancers(applyMiddleware(reduxThunk))
);

const Root = () => {
	return (
		<Router>
			<Switch>
				<ProtectedRoute exact path="/" component={App} />
				<Route path="/login" component={Splash} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
