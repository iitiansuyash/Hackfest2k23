import axios from "axios";
import React, { useState, useEffect } from 'react';
import Announcements from "../components/Announcements";
import Navbar from '../components/Navbar'
const Announcement = () => {
  const BACKEND_URL = "https://hackfest-backend-3y92.onrender.com/announcement";
  const [announcement, setAnnouncement] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const { data } = await axios.get(BACKEND_URL);
      console.log(data)
      setAnnouncement(data);
    };
    fun();
  }, []);

  return (
    <>
    <Navbar team_nav="/#sponsors" team_about="/#about" team_contact="/#contact" />
    <div className="announcementSection">
    <br/>
    <br/>
    <br/>
      <h1 style={{color:"#fafafa", textAlign:"center", fontSize:"5.5rem"}}>NOTICE BOARD</h1>
      <div style={{color:'#fafafa'}}>
        {announcement.map((item, i) => (
          <Announcements text={item.title} description={item.description} key={i} />
          ))}
      </div>
          </div>
    </>
  );
};

export default Announcement;
