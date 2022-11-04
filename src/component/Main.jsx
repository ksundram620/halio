import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
const IndexPage=()=>{
    return(
        <>
            <h1>Welcome To Login Page</h1>

            <br/>
            <h2 className="Login"><Link to="/user">User</Link></h2>
            <br/>
            <h2 className="Login"><Link to="/admin">Admin</Link></h2>
        </>
    )
}
export default IndexPage;