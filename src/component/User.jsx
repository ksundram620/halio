import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { arr } from "./Registration";
import UerPage from "./UserPage";
const User=()=>{
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [loginStatus,setLoginStatus]=useState(false);
    function user(event){
        setUserName(event.target.value);
    }
    function pass(event){
        setPassword(event.target.value);
    }
    function check(){
         // write the code here to check if this username and password is right or wrong
        arr.map((ele)=>{
            if(ele.userName
                ===userName && ele.password
                ===password){
                setLoginStatus(true);
                console.log("you are in");
            }
        })
        

       
    }
    return(
        <>
                {loginStatus===true ? <Routes><Route path='/' element={<UerPage/>}/></Routes> : 
               <>
               <label>User-Name</label>
                 <input type="text" placeholder="Enter Your user-Name" onChange={user}/>
                 <br/>
                 <label>Password</label>
                 <input type="Password" placeholder="Type your Password" onChange={pass} />
                 <br/>
                 <button onClick={check}>Login</button>
                 <button><Link to="/link">Register</Link></button>
                 </>
                }
               
                
        </>
    )
}
export default User;