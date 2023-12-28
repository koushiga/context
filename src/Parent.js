import React,{useState,useContext,createContext} from "react";

const context=createContext()

function Parent(){
    const[name,setname]=useState("Alex Armanto");
    return(
        <context.Provider value={{name}}>
            <h1>I am Parent</h1>
            <ChildA/>
        </context.Provider>
    )
}

function ChildA(){
    return(
        <div>
            <h1>I am childA</h1>
            <ChildB/>
        </div>
    )
}

function ChildB(){
    const {name}=useContext(context)
    return(
        <div>
            <h1>I am childB</h1>
            <p>{name}</p>
        </div>
    )
}

export default Parent;