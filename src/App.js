import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
	state = { quote: "" };

	componentDidMount() {
		console.log("COMPONENT DID MOUNT");
	}
	render() {
		return (
			<div>
				<h1>App</h1>
			</div>
		);
	}
}
