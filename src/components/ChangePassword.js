import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// import TeamMemberInput from "./TeamMemberInput";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "./../contexts/user.context";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
const ChangePassword = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const { setCurrentUser } = useContext(UserContext);
  const REACT_APP_BACKEND_URL =
    "https://hackfest-backend-3y92.onrender.com/change_password";
  const [data, setData] = useState({
    Player_Email: "",
    old_password: "",
    new_password: "",
    // team_name: "",
    // team_captain: "",
    // password: "",
    // team_captain_email: "",
    // team_captain_phone: "",
    // college: "",
    // team_members: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const formSubmit = async () => {
    // console.log(data);

    setData({ ...data });
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data);
      alert(res.data.message);
      console.log(res.data.data);
      setCurrentUser(res.data.data);
      console.log(res);
      localStorage.setItem("data", JSON.stringify(res.data.data));
      console.log(JSON.parse(localStorage.getItem("data")));
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    } catch (err) {
      alert(err);
    }

    // if (res.status == "200") {
    //   alert("You have successfully registered!");
    // } else {
    // }
    // try {
    //   const { dat } = await axios.post(REACT_APP_BACKEND_URL, data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <Navbar team_nav="/#sponsors" team_about="/#about" team_contact="/#contact" />
      <br />
      <br />
      <br />
      <br />

      <br />
      <div className="login_wrap">
        <div className="login_1">
          <span style={{ color: "white" }}>Change Password</span>
        </div>
        <form>
          <input
            name="Player_Email"
            type="text"
            required
            placeholder="Team Captain Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            name="old_password"
            type="old password"
            placeholder="old password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            name="new_password"
            type="new password"
            placeholder="new password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              formSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
