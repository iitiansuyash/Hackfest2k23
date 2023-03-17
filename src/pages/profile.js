import React from "react";
import { UserContext } from "../contexts/user.context";
import { useState,useContext } from "react";
import Navbar from "../components/Navbar";

const profile = () => {

  const {currentUser} = useContext(UserContext);
  const user = currentUser;
  console.log(user)
  return (
    <>
    <Navbar/>
    <div style={{color:"white"}}>user profile</div>
    {/* <div>Team Name:{user.team_name}</div>
    <div>College:{user.college}</div>
    <div>Team captain:{user.team_captain}</div> */}

    </>
  );
};

export default profile;
