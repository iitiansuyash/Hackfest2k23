import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/user.context";
import styles from "../styles/Login.module.css";


const Login = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const { setCurrentUser } = useContext(UserContext);
  const REACT_APP_BACKEND_URL =
    "https://hackfest-backend-3y92.onrender.com/login";
  const [data, setData] = useState({
    team_name: "",
    team_captain: "",
    password: "",
    team_captain_email: "",
    team_captain_phone: "",
    college: "",
    team_members: [],
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
      // console.log(res.data.data);
      setCurrentUser(res.data.data);
      // console.log(res);
      localStorage.setItem("Dammta", JSON.stringify(res.data.data));
      // console.log(JSON.parse(localStorage.getItem("data")));
      setTimeout(() => {
        router.push("/profile");
      }, 1000);
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
      {/* <Navbar
        team_nav="/#sponsors"
        team_about="/#about"
        team_contact="/#contact"
      /> */}
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <div className="login_wrap">
        <form className={styles.form}>
          <h3>Login Here</h3>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="Player_Email"
            required
            placeholder="Team Leader's Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="username" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <button
            className={styles.button}
            type="submit"
            onClick={(e) => {
              console.log("hi");
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

export default Login;
