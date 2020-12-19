import React, { useEffect, useState } from "react";
import axios from "axios";
import "./input.css";

export const InputPanel = () => {
	const [input, setValue] = useState("");
	const [hint, setHint] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3000/new-password").then((res) => {
			const data = res?.data?.hint.toString();
			setHint(data.split(""));
		});
	}, []);

	const setHintMarkup = () => {
		const query = document.getElementById("game_input");
		let final = "";
		const splittedValue = input.split("");
		splittedValue.forEach((v) => {
			if (hint.includes(v)) {
				final = final + `<span class="highlight">${v}</span>`;
			} else {
				final = final + `<span>${v}</span>`;
			}
		});
		query.innerHTML = final;
		return query;
	};
	return (
		<div>
			<h1>Guess The Number Game</h1>
			<div
				type="text"
				id="game_input"
				contentEditable
				onInput={(e) => setValue(e.target.outerText)}
			/>
			<br />
			<button onClick={setHintMarkup}>Submit</button>
		</div>
	);
};

export default InputPanel;
