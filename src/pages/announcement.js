import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Announcement from "../components/Announcement";
const announcement = () => {
  const BACKEND_URL = "http://localhost:8000/announcement";
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
          <Announcement text={item.announcement} key={i} />
        ))}
      </div>
    </>
  );
};

export default announcement;
