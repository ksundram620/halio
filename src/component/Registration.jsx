import React from "react";
import { useState } from "react";
 //array of object of all the details
  
export let arr=[];
const Register=(props)=>{
  console.log(props);
     
    //states
    const[firstName,setfirstName]=useState();
    const[lastName,setLastName]=useState();
    const[uName,setUName]=useState();
    const[pass,setPass]=useState();
    const [add,setAdd]=useState();
    const [gen,setGen]=useState();
    const [status,setStatus]=useState();

    function submit(){
        let details={
            fname:firstName,
            lname:lastName,
            userName:uName,
            password:pass,
            address:add,
            gender:gen,
            status:status
        }
         // checking the undefined
      if(firstName===undefined || lastName===undefined || uName===undefined){
         return;
         }
        arr.push(details);
        
        document.getElementById('fname').value=null;
        document.getElementById('lname').value=null;
        document.getElementById('uname').value=null;
        document.getElementById('pass').value=null;
        document.getElementById('add').value=null;

    }
    function fname(e){
        setfirstName(e.target.value)

    }
    function lname(e){
        setLastName(e.target.value)
    }
    function username(e){
        setUName(e.target.value);
    } 
    function password(e){
        setPass(e.target.value)
    }
    function address(e){
        setAdd(e.target.value)
    }
    function genderm(e){
        setGen("Male")
    }
    function genderf(){
        setGen("Female")
    }
    function stat(id){
        setStatus(id);
    }
    

    return(
        <>
            <h1>Welcome to registration page</h1>
            <label htmlFor="">First Name :</label>
            <input type="text" id="fname" onChange={fname} required/>
            <br/>
            <label htmlFor="">Last Name :</label>
            <input type="text" id="lname" onChange={lname} required/>
            <br/>
            <label htmlFor="">user-Name</label>
            <input type="text" id="uname" onChange={username} required/>
            <br/>
            <label htmlFor="">password</label>
            <input type="password" id="pass" onChange={password} required/>
            <br/>
            <label htmlFor="">address</label>
            <input type="text" id="add" onChange={address} required/>
            <br/>
            <label htmlFor="">Gender</label>
            <input type="radio" name="test" value="male" onClick={genderm}/>Male
            <input type="radio" name="test" value="female" onClick={genderf}/>Female
            <br/>
            <label>Status</label>
            <select name="" id="status" onClick={()=>stat(document.getElementById('status').value)}>
            <option value="active">active</option>
             <option value="inactive">inactive</option>
            </select>
            <br/>
            <button onClick={submit}>submit</button>
        </>
    )
}

export default Register;
