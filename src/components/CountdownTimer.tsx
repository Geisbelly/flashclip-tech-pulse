
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // Date in ISO format
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contagem Regressiva para o Evento</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="countdown-item animate-countdown">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.days}</span>
          <span className="text-sm">Dias</span>
        </div>
        <div className="countdown-item animate-countdown [animation-delay:0.25s]">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm">Horas</span>
        </div>
        <div className="countdown-item animate-countdown [animation-delay:0.5s]">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm">Minutos</span>
        </div>
        <div className="countdown-item animate-countdown [animation-delay:0.75s]">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
