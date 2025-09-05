import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <div className="festival-countdown-item min-w-[80px] md:min-w-[100px]">
        <span className="festival-countdown-number animate-countdown">
          {timeLeft.days}
        </span>
        <span className="festival-countdown-label">Days</span>
      </div>
      <div className="festival-countdown-item min-w-[80px] md:min-w-[100px]">
        <span className="festival-countdown-number animate-countdown">
          {timeLeft.hours}
        </span>
        <span className="festival-countdown-label">Hours</span>
      </div>
      <div className="festival-countdown-item min-w-[80px] md:min-w-[100px]">
        <span className="festival-countdown-number animate-countdown">
          {timeLeft.minutes}
        </span>
        <span className="festival-countdown-label">Minutes</span>
      </div>
      <div className="festival-countdown-item min-w-[80px] md:min-w-[100px]">
        <span className="festival-countdown-number animate-countdown">
          {timeLeft.seconds}
        </span>
        <span className="festival-countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;