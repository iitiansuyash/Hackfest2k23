import styles from '../styles/About.module.css'

const About = () => {

  return (
    <>
      <div className={styles.container} id='about'>
        <header>
          <h1 className={styles.pageTitle}>About</h1>
        </header>
        <main>
          <article className={styles.content}>
            <section className={styles.contentDescriptor}>
              <h2 className={styles.contentTitle}> &gt; Hackfest Info</h2>
            </section>
            <section className={styles.contentTextBox}>
              <p className={styles.contentText}>
                HackFest is a 36 hour hackathon organised by the NVCTI, IIT
                (ISM) Dhanbad, which was devised as a means for students to
                build innovative solutions to real life problems. HackFest aims
                to contribute to the growth of technology in India by
                contributing to the cause of Make-in-India. The previous four
                iterations of HackFest proved to be among the finest hackathons
                in East India. Over 2000 enthusiasts signed up in the past
                iterations of the hackathon to build and innovate. HackFest
                believes in conceptualizing &rdquo;ideas into reality&rdquo; and was started
                as a platform to provide support to budding developers to
                enhance their problem solving skills and work towards providing
                groundbreaking solutions to existing day-to-day problems.
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  )
}

export default About
