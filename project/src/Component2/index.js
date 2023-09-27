import "./style.css";
import { useContext, useState } from "react";
import { MyContext } from "../context";
function Component2( props ) {
	let value = useContext(MyContext)
	let [nshanner,setNshanner]=useState('0')
	
	function h() {
		
			
		
      if((value.val).slice(-1)==="+" ||  (value.val).slice(-1)==="-" || (value.val).slice(-1)==="*" || (value.val).slice(-1)==="/"){
	  }
	  else{
	  if(value.val==0 && (value.val).length==1){
		value.setVal(""+props.val);
	  }else{
		value.setVal(value.val+""+props.val);
	  }
	}
    }
	return (

		<div className="Component2">
		<input type="button" value={props.val} onClick={h}></input>
		</div>			

	);
}

export default Component2;

