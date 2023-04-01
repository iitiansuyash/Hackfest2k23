import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Team.module.css'
const TeamCard = ({ user }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
        <Image
          src={user?.image}
          className={styles.img}
          width={275}
          height={250}
          alt={user?.name}
        />
        </div>
        <h1 className={styles.title}>{user?.name}</h1>
        <p className={styles.text}>{user?.position}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Link href={user?.insta_url}>
            <img
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                filter: 'invert(100%)',
                height: '30px',
                width: '30px',
              }}
              src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"
            />
          </Link>
          <Link href={user?.linkedin_url}>
            <img
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                filter: 'invert(100%)',
                height: '30px',
                width: '30px',
              }}
              src="https://img.icons8.com/windows/32/000000/linkedin.png"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
