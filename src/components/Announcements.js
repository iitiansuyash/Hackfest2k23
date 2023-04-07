import React from 'react'
// import 'augmented-ui/dist/augmented.css';

const Announcements = ({ text, description }) => {
  return (
    <>
      <main className="l-card mb-4">
        <section className="l-card__user">
          <div className="l-card__userImage">
            <img
              src="https://www.hackfestiitism.com/assets/images/sponsors/hfOfficialLogo.png"
              className="imgAnnouncementLogo"
              alt="Naruto"
            />
          </div>
          <div className="l-card__userInfo">
            <span>{text}</span>
            <span>Team HF</span>
          </div>
        </section>
        <section className="l-card__text">
          <p>{description}</p>
        </section>
      </main>
    </>
  )
}
export default Announcements
