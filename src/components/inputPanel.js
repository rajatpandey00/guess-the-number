import React, { useEffect, useState } from "react";
import axios from "axios";
import "./input.css";
import HintPanel from "./hintPanel";

export const InputPanel = () => {
	const [input, setValue] = useState("");
	const [hint, setHint] = useState("");
	const [highlights] = useState([]);
	const [isCorrect, setIsCorrect] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3000/new-password").then((res) => {
			const data = res?.data?.hint.toString();
			setHint(data);
		});
	}, []);

	const setHintMarkup = async () => {
		const data = await axios.post("http://localhost:3000/verify-password", {
			password: input,
		});
		highlights.push(...data?.data?.highlight);
		setIsCorrect(data.data.correct);
		const query = document.getElementById("game_input");
		let final = "";
		const splittedValue = input.substr(0, 8).split("");
		splittedValue.forEach((v) => {
			if (highlights.includes(parseInt(v))) {
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
			<HintPanel value={hint} />
			<div
				id="game_input"
				contentEditable
				onInput={(e) => setValue(e.target.outerText)}
			/>
			<br />
			<button onClick={setHintMarkup}>Submit</button>
			{isCorrect === false && (
				<div style={{ color: "red" }}>Sorry please try again!!</div>
			)}
			{isCorrect && <div style={{ color: "green" }}>You have won!!</div>}
		</div>
	);
};

export default InputPanel;
