import axios from "axios";
import React, { useState, useEffect } from 'react';
import Announcements from "../components/Announcements";
const Announcement = () => {
  const BACKEND_URL = "https://hackfest-backend-3y92.onrender.com/announcement";
  const [announcement, setAnnouncement] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const { data } = await axios.get(BACKEND_URL);
      setAnnouncement(data);
    };
    fun();
  }, []);

  return (
    <>
      <h1>ANNOUNCEMENTS</h1>
      <div>
        {announcement.map((item, i) => (
          <Announcements text={item.announcement} key={i} />
        ))}
      </div>
    </>
  );
};

export default Announcement;
