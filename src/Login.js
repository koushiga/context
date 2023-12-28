import React,{useState,useContext} from "react";
import { LoginContext } from "./LoginContext";

function Login(){

    const {setUsername,setShowProfile}=useContext(LoginContext)

    return(
        <div>
            <input type="text" placeholder="Enter Username" onChange={(event)=>{
                setUsername(event.target.value)
            }}/>

            <input type="text" placeholder="Enter Password"/>

            <button onClick={()=>{setShowProfile(true)}}>Login</button>
        </div>
    )
}

export default Login;