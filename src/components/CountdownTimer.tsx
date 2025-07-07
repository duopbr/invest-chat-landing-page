
import { useState, useEffect } from "react";
import { Timer, Zap } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define o fim da oferta para 2 horas a partir de agora
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 2);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-400/30">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 animate-pulse" />
          <Zap className="h-4 w-4 text-yellow-300 animate-bounce" />
        </div>
        
        <div className="flex flex-col">
          <span className="text-xs font-medium opacity-90">Oferta expira em:</span>
          <div className="flex items-center gap-1 font-bold text-lg">
            <span className="bg-white/20 px-2 py-1 rounded-lg min-w-[2.5rem] text-center">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="animate-pulse">:</span>
            <span className="bg-white/20 px-2 py-1 rounded-lg min-w-[2.5rem] text-center">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="animate-pulse">:</span>
            <span className="bg-white/20 px-2 py-1 rounded-lg min-w-[2.5rem] text-center">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
