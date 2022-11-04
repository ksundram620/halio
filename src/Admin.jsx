import React from "react";
import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import AdminPage from "./component/AdminPage";
const Admin=()=>{
    const [userNAme,setUserName]=useState();
    const [password,setPass]=useState();
    const [state,setState]=useState(false);
        const user="USERNAME";
        const pass="PASSWORD";
        function check(){
            if(userNAme===user && password===pass){
                setState(true);
            }
        }
    return(
        <>
        {state===true?<Routes><Route path="/" element={<AdminPage/>}/></Routes>:
        <>
            <h1>Welocme to Admin page</h1>
            <label htmlFor="">User-Name :</label>
            <input type="text" placeholder="USE USERNAME  " onChange={(e)=>setUserName(e.target.value)} />
            <br/>
            <label htmlFor="">Password :</label>
            <input type="password" placeholder="USE PASSWORD" onChange={(e)=>setPass(e.target.value)}/>
            <br/>
            <button onClick={check}>Login</button>
        </>}

        </>
    )
}
export default Admin;