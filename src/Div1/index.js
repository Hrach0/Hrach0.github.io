import { useState } from "react";
import Component1 from "./Component1";
import About from "../About";
import Contact from "../Contact";


function Div1(){
    let arr1 = [
        {
            name:"Margherita",
            price:"$12.50",
            descp:"Fresh tomatoes, fresh mozzarella, fresh basil",
            qarakusi:0,
            type:"pizza"
        },
        {
            name:"Formaggio",
            price:"$15.50",
            descp:"Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)",
            qarakusi:0,
            type:"pizza"
        },
        {
            name:"Chicken",
            price:"$17.00",
            descp:"Fresh tomatoes, mozzarella, chicken, onions",
            qarakusi:0,
            type:"pizza"
        },
        {
            name:"Pineapple'o'clock",
            price:"$16.50",
            descp:"Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil",
            qarakusi:0,
            type:"pizza"
        },
        {
            name:"Meat Town",
            price:"$12.50",
            descp:"Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken",
            qarakusi:1,
            type:"pizza"
        },
        {
            name:"Parma",
            price:"$21.50",
            descp:"Fresh tomatoes, mozzarella, parma, bacon, fresh arugula",
            qarakusi:2,
            type:"pizza"
        },
        {
            name:"Lasagna",
            price:"$13.50",
            descp:"Special sauce, mozzarella, parmesan, ground beefl",
            qarakusi:3,
            type:"salad"
        },
        {
            name:"Ravioli",
            price:"$14.50",
            descp:"Ravioli filled with cheese",
            qarakusi:0,
            type:"salad"
        },
        {
            name:"Spaghetti Classica",
            price:"$11.00",
            descp:"Fresh tomatoes, onions, ground beef",
            qarakusi:0,
            type:"salad"
        },
        {
            name:"Seafood pasta",
            price:"$25.50",
            descp:"Salmon, shrimp, lobster, garlic",
            qarakusi:0,
            type:"salad"
        },
        {
            name:"Today's Soup",
            price:"$5.50",
            descp:"Ask the waiter",
            qarakusi:4,
            type:"starter"
        },
        {
            name:"Bruschetta",
            price:"$8.50",
            descp:"Bread with pesto, tomatoes, onion, garlic",
            qarakusi:0,
            type:"starter"
        },
        {
            name:"Garlic bread",
            price:"$9.50",
            descp:"Grilled ciabatta, garlic butter, onions",
            qarakusi:0,
            type:"starter"
        },
        {
            name:"Tomozzarella",
            price:"$10.50",
            descp:"Tomatoes and mozzarella",
            qarakusi:0,
            type:"starter"
        }
    ]

    let [checkclick1,setCheckclick1] = useState("div2-d3-d1 checkclick");
    let [checkclick2,setCheckclick2] = useState("div2-d3-d1");
    let [checkclick3,setCheckclick3] = useState("div2-d3-d1");
let[n,setN]=useState(1)
    let [arr2,setArr2] = useState(arr1.filter((elem)=> elem.type==="pizza"));


    return(
        <>
        <div className="div1" id="menu1-2">
<div className="div1-1">
<h1>THE MENU</h1>
</div>

<div className="div2">


<div className="div2-d2">
<div className="div2-d3">

<button id="b1" className={checkclick1} onClick={()=>{
    setArr2(arr1.filter((elem)=> elem.type==="pizza"));
    setCheckclick1("div2-d3-d1 checkclick");
    setCheckclick2("div2-d3-d1");
    setCheckclick3("div2-d3-d1");
    setN(0)
}}>
<h1>Pizza</h1>
</button>
<button id="b2" className={checkclick2} onClick={()=>{
    setArr2(arr1.filter((elem)=> elem.type==="salad"));
    setCheckclick2("div2-d3-d1 checkclick");
    setCheckclick1("div2-d3-d1");
    setCheckclick3("div2-d3-d1");
    setN(1)
}}>
<h1>Salads</h1>
</button>

<button id="b3" className={checkclick3} onClick={()=>{
    setArr2(arr1.filter((elem)=> elem.type==="starter"));
    setCheckclick3("div2-d3-d1 checkclick");
    setCheckclick2("div2-d3-d1");
    setCheckclick1("div2-d3-d1");
    setN(2)
}}>
<h1>Starter</h1>
</button>



</div>
</div>



<div className="div3" id="menu1">
<div class="div3-1">

{
arr2.map((elem)=>{
    return <Component1 props={elem}/>
})}

</div>
</div>


</div>
</div>
<About/>
<Contact/>
</>
    )
}

export default Div1;