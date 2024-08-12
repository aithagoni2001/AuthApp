import { useState,useEffect,useRef } from "react";
import { Button } from "antd";


let arr =[]
const App = ()=>{
    let obj=useRef({name:"amruthraj",age:20});
    let btnref=useRef(null)
    let func =()=>{setCount(count+1)
        arr.push(obj)
        if(arr.length===2){
            
            console.log(arr[0]===arr[1]);
        }
    }
    console.log(arr[0],arr[1]); 
    let incrementage = ()=>{
        obj.current.age+=1
    }
    useEffect(()=>{
        console.log(btnref.current.innerText);
    })
const [count,setCount] =useState(0);
    return (<>
    <h1>count:{count}</h1>
    <p>name:<b>{obj.current.name}</b> <i>age:{obj.current.age}</i></p>
    <Button onClick={func} >Increment</Button>
    <button ref={btnref} onClick={incrementage}>increment age</button>
    </>)
}

 export default App;



