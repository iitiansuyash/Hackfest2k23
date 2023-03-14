import React from "react";
import styles from "../styles/Team.module.css";
const TeamCard = ({ user }) => {
  //   const main = document.querySelector("#main");

  //   for (user of users) {
  //     newCard(user);
  //   }

  //   function newCard(user) {
  //     main.innerHTML += `
  //    <div class="card">
  //       <img class="image" src="${user.image}" alt="user image via placeholder">
  //       <h1 class="title">${user.name}, ${user.age}</h1>
  //       <p class="text">${user.info}</p>
  //    </div>
  //    `;
  //   }

  return (
    <div>
      {/* <h1 className={styles.ttl}>Our Team</h1> */}

      <div className={styles.card}>
        <img
          className={styles.image}
          src={user?.image}
          alt="user image via placeholder"
        />
        <h1 className={styles.title}>{user?.name}</h1>
        <p className={styles.text}>{user?.info}</p>
      </div>
    </div>
  );
};

export default TeamCard;
