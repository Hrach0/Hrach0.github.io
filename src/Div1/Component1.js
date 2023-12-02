import { useState } from "react";

function Component1({props}){

    let qarakusi1;
    let qarakusi2;

    if(props.qarakusi==1){
        qarakusi1 = "hot1";
        qarakusi2 = "Hot!";
    }else if(props.qarakusi==2){
        qarakusi1 = "new1";
        qarakusi2 = "New";
    }else if(props.qarakusi==3){
        qarakusi1 = "new1";
        qarakusi2 = "Popular";
    }else if(props.qarakusi==4){
        qarakusi1 = "new1";
        qarakusi2 = "Seasonal";
    }

    return(
        <div class="num1">
            <div class="num1-1">
                <div class="h1h2">
                    <div className="h1div1">
                        <h1>{props.name}</h1>
                        <h1 className={qarakusi1}>{qarakusi2}</h1>
                    </div>
                    <h2>{props.price}</h2>
                </div>

                <div class="p1">
                    <p>{props.descp}</p>
                </div>
            </div>
</div>
    )
}

export default Component1;