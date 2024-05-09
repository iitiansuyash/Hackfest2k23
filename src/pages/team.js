import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TeamCard from '../components/TeamCard'
import styles from '../styles/Team.module.css'
const Team = () => {
  const BACKEND_URL = 'https://hackfest-backend-3y92.onrender.com/organizing'
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fun = async () => {
      const res = await axios.get(BACKEND_URL)
      console.log(res)
      setUsers(res.data)
    }
    fun()
  }, [])

  return (
    <>
      <Navbar team_nav="/#sponsors" team_about="/#about" team_contact="/#contact" />
      <div className={styles.container}>
        <h1 className={styles.ttl}>Advisors</h1>
      </div>
      {/* <main id={styles.main}>
        {users.map((user, i) => {
          if (user.type == 'Coordinator') {
            return <TeamCard user={user} key={i} />
          }
        })}
      </main> */}
      
      {/* <main id={styles.main}>
        {users.map((user, i) => {
          if (user.type == 'Treasurer') {
            return <TeamCard user={user} key={i} />
          }
        })}
      </main> */}
      <main id={styles.main}>
      {users
  .filter(user => user.type === 'Advisor') // Filter out users of type 'Advisor'
  .sort((a, b) => a.id - b.id) // Sort the filtered array by user id
  .map((user, i) => (
    <TeamCard user={user} key={i} />
  ))}
      </main>
      <div className={styles.container}>
        <h1 className={styles.ttl}>Team Leads</h1>
      </div>
      <main id={styles.main}>
        {users.map((user, i) => {
          if (user.type == 'lead') {
            return <TeamCard user={user} key={i} />
          }
        })}
      </main>
    </>
  )
}

export default Team
