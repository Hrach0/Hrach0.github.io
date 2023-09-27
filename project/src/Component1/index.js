import { useContext } from "react";
import { MyContext } from "../context";
import "./style.css";

function Component1(props) {

	let value = useContext(MyContext)
	function a() {
      
	  if(value.val==0 && (value.val).length==1){
		value.setVal(""+props.val);
	  }else{
		value.setVal(value.val+""+props.val);
	  }
    }

	return (
		<div className="Component1">
			<input type="button" className={props.val===0 ? "aaaa" : "aaa"} value={props.val} onClick={a} />
		</div>
	);
}
export default Component1;