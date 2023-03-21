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
    <Navbar/>
      <h1 style={{color:'white'}}>GENERAL ANNOUNCEMENTS</h1>
      <div style={{color:'white'}}>
        {announcement.map((item, i) => (
          <Announcements text={item.title} description={item.description} key={i} />
        ))}
      </div>
    </>
  );
};

export default Announcement;
