import { useContext } from "react";
import { MyContext } from "../context";
import "./style.css";

function Component8( props ) {
	let value = useContext(MyContext)
    function a7(){
        value.setVal(String(value.val).slice(0,-1))
    }
	return (
		<div className="Component8">
		<input type="button" value={props.val} onClick={a7}></input>
		</div>			

	);

}
export default Component8;

