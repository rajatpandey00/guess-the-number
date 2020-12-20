import { useEffect } from "react";
import InputPanel from "./components/inputPanel";
import './widget.css';

function Widget() {
	useEffect(() => {
	}, []);
	return (
		<div className="widget">
		 <InputPanel/>
		</div>
	);
}

export default Widget;
