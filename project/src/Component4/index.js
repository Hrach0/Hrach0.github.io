import { useContext } from "react";
import "./style.css";
import { MyContext } from "../context";

function Component4( props ) {
let value=useContext(MyContext);
	function b(){
		value.setVal("0");
	}
	return (

		<div className="Component4">
		<input type="button" value={props.val} onClick={b}/>
		</div>			

	);
}
export default Component4;

