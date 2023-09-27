import { useState } from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';

import Component8 from './Component8';
import { MyContext } from './context';
function App() {
  let a1=[7,8,9,4,5,6,1,2,3,0,"."];
  let a2=["/","*","-","+"];
  let a3=["AC"];
  let a4=["+/-"];
  let a5=["="];
  let a7=["<-"];
  let [val,setVal] = useState(0+"");
  return (
    <div className="App">
      <MyContext.Provider value={{val:val,setVal:setVal}}>
<div className="div0">
<Component3 />
</div>

<div className='divv'>


<div className='divv3'>
<div className='divv1'>
<div className="div5">{
  a3.map((elm)=>{
    return<Component4 val={elm}></Component4>
  }
  )
}  </div>




  <div className="div6">{
  a4.map((elm)=>{
    return<Component5 val={elm}></Component5>
  }
  )
}
</div>
<div className='div9'>
<Component8 val={a7}/>
</div>
</div>

<div className="div3">{
  
        a1.map((elm)=>{
          console.log(elm)
return<Component1  val={elm}/>
})
}</div>
</div>
<div className='divv2'>
<div className='div4'>
  {
    a2.map((elm)=>{
      return <Component2 val={elm}></Component2>
  }
    )
  }
  <div className="div7">{
  a5.map((elm)=>{
    return<Component6 val={elm}></Component6>
  }
  )
}</div>

</div>
</div>
</div>
</MyContext.Provider>
    </div>
  );
}

export default App;
