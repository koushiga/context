import React,{useContext} from "react";
import { LoginContext } from "./LoginContext";

function Profile(){
    
    const {username}=useContext(LoginContext);
    return(
        <div>
            <h2>Profile Page</h2>
            <p>Hello:{username},  welcome.........</p>
        </div>
    );
}

export default Profile;