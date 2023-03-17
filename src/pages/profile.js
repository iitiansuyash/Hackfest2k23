import React from "react";
import { UserContext } from "../contexts/user.context";
import { useState,useContext,useEffect } from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";

const profile = () => {
  // const [user,setUser] = useState({team_name:"aghgdfj"});
  // const {currentUser} = useContext(UserContext);
  // const currentUser = 
// console.log("hi");
//   console.log(user);\  
const user=Cookies.get("data");
console.log(user)
  // useEffect(() => {
  //   setUser(Cookies.get("data"));
  //   console.log("user");
  // }, []);
  return (
    <>
    <Navbar/>
    <p>{user?.team_name}</p>
    <div>
    <div style={{color:"white"}}>user profile</div>
    <div>Team Name: {user?.team_name}</div>
    <div>College:{user?.college}</div>
    <div>Team captain:{user?.team_captain}</div>
    </div>
    </>
  );
};

export default profile;
