import React from "react";
import Link from "next/link";
import { UserContext } from "../contexts/user.context";
import { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import axios from "axios";
import QRCode from "react-qr-code";


export default function Profile() {
  const [user, setUser] = useState(null);
  const REACT_APP_BACKEND_URL = "https://hackfest-backend-3y92.onrender.com/";
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
  const [ann, setAnn] = useState([]);
  const [inQR, setInQR] = useState('');
  const [outQR, setOutQR] = useState('');
  const [att,setAtt]  = useState(0);
  let teamdat;
  useEffect(() => {
    const data = localStorage.getItem("Dammta");
    if (data) {
      try {
        setUser(JSON.parse(data));
        // console.log(JSON.parse(data));
        const teamid = JSON.parse(data).Team_Id;
        console.log(teamid);
        setInQR(`in/${teamid}`)
        setOutQR(`out/${teamid}`)
        const fun = async () => {
          teamdat = (await axios.get(`${REACT_APP_BACKEND_URL}${teamid}`)).data;
          setAnn(teamdat.announcement);
          setAtt(teamdat.attendance_counter);
        };
        fun();
        // console.log(teamdat);
        // console.log("hi", teamdat.announcement);
        // setAnn(teamdat?.announcement);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  // useEffect(() => {
  //   setAnn(teamdat?.announcement);
  //   console.log(teamdat?.announcement);
  // }, [teamdat]);
  // console.log(user?.announcement);
  return (
    <>
      <Navbar
        team_nav="/#sponsors"
        team_about="/#about"
        team_contact="/#contact"
      />

      <div className="student-profile">
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img
                    className="profile_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8s0zDf3sff4glrEK6DShUR45t4LvBFuy0A&usqp=CAU"
                    alt=""
                  />
                  <h1>
                    <strong>{user?.Team_Name}</strong>
                  </h1>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <strong className="pr-1">Team ID: </strong>
                    {user?.Player_Email}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Team Attendance: </strong>
                    {att}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Team Organisation: </strong>
                    {user?.Player_Organisation}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i> Team Information
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <div
                    id="style-1"
                    style={{
                      // width: '580px',
                      // height: '175px',
                      overflow: "auto",
                    }}
                  >
                    <table className="table table-bordered">
                      <tr>
                        <th width="30%">Team Leader</th>
                        <td width="2%">:</td>
                        <td>{user?.Player_Name}</td>
                      </tr>
                      <tr>
                        <th width="30%">Problem Statement</th>
                        <td width="2%">:</td>
                        <td>{user?.problem_statement_and_solution}</td>
                      </tr>
                      <tr>
                        <th width="30%">Team UID</th>
                        <td width="2%">:</td>
                        <td>{user?.Team_Id}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>{" "}
                    <strong>{user?.Team_Name}</strong> Announcement
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <div
                    id="style-1"
                    style={{
                      // width: '580px',
                      height: "175px",
                      overflow: "auto",
                    }}
                  >
                    <table className="table table-bordered text-center">
                      {ann.map((item, i) => (
                        <tr key={i}>
                          <td>
                            <span style={{ fontWeight: "600" }}>
                              {item.title}
                            </span>
                            :&nbsp;<span>{item.description}</span>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <br />
        <div style={{display:'flex', flexWrap:'wrap',alignItems:'center',gap:'20px', justifyContent:'space-around', margin:'auto'}}>
      <div style={{ height: "auto", margin: "10px", padding:'10px',maxWidth: '12rem', width: "100%",background: 'white' }}>
        <span style={{marginLeft:'10px', fontSize:'1.5rem'}}>IN QR</span>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={inQR}
    viewBox={`0 0 256 256`}
    />
</div>
<div style={{ height: "auto", margin: "10px",padding:'10px', maxWidth: '12rem', width: "100%",background: 'white' }}>
<span style={{marginLeft:'10px', fontSize:'1.5rem'}}>OUT QR</span>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={outQR}
    viewBox={`0 0 256 256`}
    />
</div>
      </div>
      <Link href="/changepassword" passHref={true} legacyBehavior={true}>
          <a className="team-btn-anchor">
            <button className="team-btn">Change Password</button>
          </a>
        </Link>
        <br/>
      </div>
     
    </>
  );
}
