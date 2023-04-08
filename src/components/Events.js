import React from 'react';
import { Container } from 'reactstrap';
import { useEffect, useRef, useState } from 'react'
import WAVES from "vanta/dist/vanta.waves.min"
import * as THREE from "three"
import styles from '../styles/Events.module.css'

import Countdown from './Countdown';

export default function Events() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
      if(!vantaEffect){
        setVantaEffect(
          WAVES({
            el: vantaRef.current,
            THREE,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3
          })
        )
      }

      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
      

    return ( 
    <>
    <main className={styles.main} ref={vantaRef} style={{ overflowY: "hidden", overflow: "hidden" }}>
    <div className={styles.container}>
          <h1 className={styles.ttl}>Timeline</h1>
     </div>

        {/* <Countdown /> */}
        
        
    </main>
    </> 
    );
}
