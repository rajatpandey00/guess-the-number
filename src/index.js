import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Widget from "./widget";

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/">
				<React.StrictMode>
					<Widget />
				</React.StrictMode>
			</Route>
		</Switch>
	</Router>,
	document.getElementById("root")
);
