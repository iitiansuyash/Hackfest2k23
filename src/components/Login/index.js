import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// import TeamMemberInput from "./TeamMemberInput";
// import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/user.context'
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
const Login = () => {
  // const navigate = useNavigate();
  const router = useRouter()
  const { setCurrentUser } = useContext(UserContext)
  const REACT_APP_BACKEND_URL = 'http://localhost:8000/login'
  const [data, setData] = useState({
    team_name: '',
    team_captain: '',
    password: '',
    team_captain_email: '',
    team_captain_phone: '',
    college: '',
    team_members: [],
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const formSubmit = async () => {
    // console.log(data);

    setData({ ...data })
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data)
      alert(res.data.message)
      console.log(res.data.data)
      setCurrentUser(res.data.data)
      console.log(res)
      localStorage.setItem('data', JSON.stringify(res.data.data))
      console.log(JSON.parse(localStorage.getItem('data')))
      setTimeout(() => {
        router.push('/profile')
      }, 2000)
    } catch (err) {
      alert(err)
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
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <br />
      <div className="login_wrap">
        <div className="login_1">
          <span style={{ color: 'white' }}>Sign Up for the hackfest</span>
        </div>
        <form>
          <input
            name="team_name"
            type="text"
            required
            placeholder="team name"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={(e) => {
              handleChange(e)
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault()
              formSubmit()
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
