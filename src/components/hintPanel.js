import { React } from "react";

export const HintPanel = ({ value }) => {
	return (
		<div>
			<div style={{ display: "inline-flex" }}>
				<h1>Hint</h1>
				<div id="game_hint">{value}</div>
			</div>
		</div>
	);
};

export default HintPanel;
