import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
	state = { quote: "" };

	componentDidMount() {
		this.fetchQuote();
	}

	fetchQuote = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				this.setState({ quote: advice });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		const { quote } = this.state;
		return (
			<div className="app">
				<div className="card">
					<h1 className="heading">{quote}</h1>
				</div>
			</div>
		);
	}
}
