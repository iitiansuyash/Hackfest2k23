import React from 'react'
import { UserContext } from '../contexts/user.context'
import { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Cookies from 'js-cookie'

const Profile = () => {
  const [user, setUser] = useState(null)
  // const {currentUser} = useContext(UserContext);
  // const currentUser =
  // console.log("hi");
  //   console.log(user);\
  // const user=Cookies.get("data");
  // console.log(Cookies.get("data"));
  // const user = localStorage.getItem("data");
  // console.log(user);/
  // console.log(window)
  // console.log(typeof(user));
  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      try {
        setUser(JSON.parse(data));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  // console.log(user?.team_name);
  return (
    <>
      <Navbar/>

      {/* <p style={{ color: 'white' }}>{user?.team_name}</p> */}
      <div style={{marginTop:'3rem'}}>
        <div style={{ color: 'white' }}>user profile</div>
        <div style={{ color: 'white' }}>Team Name: {user?.team_name}</div>
        <div style={{ color: 'white' }}>College:{user?.college}</div>
        <div style={{ color: 'white' }}>Team captain:{user?.team_captain}</div>
      </div>
    </>
  )
}

export default Profile;
