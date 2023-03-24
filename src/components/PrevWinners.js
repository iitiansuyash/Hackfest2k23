import React from 'react'
import { Container, Row, Col } from 'reactstrap'
// import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../styles/Winners.module.css'
// import Pdf1 from '../../public/assets/pdf/CodeQueens_626e1218850f2.docx'
import Pdf2 from '../../public/assets/pdf/Incognito_626fcec066cd7.pdf'
import Pdf3 from '../../public/assets/pdf/Hack_Feast_626ea0d615f09.pdf'

export default class PrevWinners extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowHeight: 720,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({ windowHeight: window.innerHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    return (
      // <ScrollableAnchor id="previousWinners">
      <section className={styles.about}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="section-header">Previous Winners</h2>
              <div className={styles.division}>
                {/* <ColoredLine color="red" /> */}
                <h3 className={styles.sectionSubHead}>TEAM CODEQUEENS</h3>
                <div>
                  <p>
                    They were the winners of HackFest&lsquo;22. They developed an
                    attendance recording model along with a performance
                    detection model using machine learning. The attendance model
                    analyzed faces using webcam input and stored the attendance.
                    The performance detection model contained an eye detection
                    model and anemotion detection model. The eye-detection model
                    analyzed whether the eyes of a student were open or closed
                    while the emotion detection model analyzed the emotions of a
                    student during a particular class. The crux of the project
                    was implemented using OpenCV, TensorFlow, and Keras Library.
                  </p>
                </div>
                <a href="https://docs.google.com/document/d/1XGVHtNv049lUF-7OULeAJ3MRabaDDJ8N/edit?usp=sharing&ouid=111360180800187898625&rtpof=true&sd=true" target="_blank">
                  <button className="fill">Proposal Link</button>
                </a>
              </div>
            </Col>
            <Col md={12}>
              <div className={styles.division}>
                <h2 className={styles.sectionSubHead}>TEAM INCOGNITO</h2>
                <div>
                  <p>
                    In India, we have 159.7 million hectares of arable area out
                    of which 25% becomes usable for repeated cultivation and
                    contamination as soil loses fertility. With the growing
                    population in our country, the demand for food is also
                    increasing. The 25% loss is also a huge burden and there is
                    a need to improve the production per area. So, the team
                    developed a system &ldquo;IOPONICS&ldquo; which is a combination of
                    Hydroponics and lot which helps in improving the
                    productivity even in usable lands. The system is integrated
                    with sensors to manage parameters like temperature, pH of
                    solution automatically. Moreover, the user can easily see
                    and control the charges from their respective hand held
                    smart device.
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1GgpW0T1mV5o_wCTosLNhuq6snmR4cqOq/view?usp=share_link" target="_blank">
                  <button className="fill">Proposal Link</button>
                </a>
              </div>
            </Col>
            <Col md={12}>
              <div className={styles.division}>
                <h2 className={styles.sectionSubHead}>TEAM HACK_FEAST</h2>
                <div>
                  <p>
                    Every year tech giants face billion dollar lawsuits against
                    them in the United States of America and the European Union
                    as their website is incompatible with the American with
                    Disability Act (ADA) or the General Data Protection
                    Regulation (GDPR), respectively. Therefore, the team created
                    a tool named WebEvaluator, to help website developers find
                    compliance issues and warnings in their website and it also
                    suggests ways to fix them. Some of the main features of the
                    website included: a super fast crawler written in Go that
                    could process more than 1000 requests/second/core, SSL
                    certificate compliance agent which checks for the
                    certificates&lsquo; validity and analyzes the SSL certificate for
                    security issues etc.
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1q0LvdT0U3ECIus7S0psdJZmdUwYjwOCC/view?usp=share_link" target="_blank">
                  <button className="fill">Proposal Link</button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      // </ScrollableAnchor>
    )
  }
}
