import "./style.css";
import { useContext } from "react";
import { MyContext } from "../context";

function Component6( props ) {
	let value = useContext(MyContext)
function k(){
	value.setVal(eval(value.val))
}
	return (

		<div className="Component6">
		<input type="button" value={props.val} onClick={k}></input>
		</div>			

	);
}
export default Component6;

