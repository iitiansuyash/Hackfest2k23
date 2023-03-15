import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import styles from "../styles/Team.module.css";
const Team = () => {
  const BACKEND_URL = "https://hackfest-backend-3y92.onrender.com/organizing";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const res = await axios.get(BACKEND_URL);
      // users = res.data;
      setUsers(res.data);

      // console.log(users);
    };
    fun();
  }, []);
  // const users = await

  // [
  //   {
  //     name: "Aditya Kumar Garg",
  //     age: 22,
  //     info: "Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Anshuman Tejaswi",
  //     age: 21,
  //     info: "Treasurer",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Akshat Singh",
  //     age: 24,
  //     info: "Sponsorship and PR Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Akash Mahapatra",
  //     age: 21,
  //     info: "Operations Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Aditya Mishra",
  //     age: 24,
  //     info: "Tech Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Shulabh Prakash",
  //     age: 24,
  //     info: "Graphics and Animation Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Shirin Kaul",
  //     age: 27,
  //     info: "Content Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Bhavya Jain",
  //     age: 27,
  //     info: "Promotion and Marketing Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  //   {
  //     name: "Brajesh Meena",
  //     age: 27,
  //     info: "Promotion and Marketing Coordinator",
  //     image: "https://via.placeholder.com/140",
  //   },
  // ];
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <h1 className={styles.ttl}>Our Team</h1>
      <main id={styles.main}>
        {users.map((user, i) => (
          <TeamCard user={user} key={i} />
        ))}
      </main>
    </>
  );
};

export default Team;
