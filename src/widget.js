import { useEffect } from "react";
import InputPanel from "./components/inputPanel";

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
