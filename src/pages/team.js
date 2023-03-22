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
      console.log(res);
      setUsers(res.data);
    };
    fun();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
          <h1 className={styles.ttl}>Advisors</h1>
     </div>
      <main id={styles.main}>
        {users.map((user, i) => (
          <TeamCard user={user} key={i} />
        ))}
      </main>
    </>
  );
};

export default Team;
