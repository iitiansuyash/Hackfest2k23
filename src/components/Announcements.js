import React from "react";

const Announcements = ({ text , description}) => {
  return (
    <>
  
    <div style={{ margin: "20px" }}>{text}</div>
    <div style={{ margin: "20px" }}>{description}</div>
    </>
  );
};
export default Announcements;
