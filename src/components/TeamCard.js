import React from "react";
import styles from "../styles/Team.module.css";
const TeamCard = ({ user }) => {
  return (
    <div>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={user?.image}
          alt="user image via placeholder"
        />
        <h1 className={styles.title}>{user?.name}</h1>
        <p className={styles.text}>{user?.position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
