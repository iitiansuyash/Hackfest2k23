import React, { useEffect, useState } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date("April 07, 2023 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="countdown-container">
        <div className="countdown-timer">
            <h1>{timeLeft.days}</h1>
            <p>Days</p>
        </div>
        <div className="countdown-timer">
            <h1>{timeLeft.hours}</h1>
            <p>Hours</p>
        </div>
        <div className="countdown-timer">
            <h1>{timeLeft.minutes}</h1>
            <p>Minutes</p>
        </div>
        <div className="countdown-timer">
            <h1>{timeLeft.seconds}</h1>
            <p>Seconds</p>
        </div>
        </div>
    </>
  );
}

export default Countdown;

