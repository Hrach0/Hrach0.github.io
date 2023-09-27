import { useContext } from "react";
import "./style.css";
import { MyContext } from "../context";
function Component3() {
	let value=useContext(MyContext);



  return (
    <div className="Component3">
      <input type="text"  value={value.val}/>
    </div>
  );
}
export default Component3;
