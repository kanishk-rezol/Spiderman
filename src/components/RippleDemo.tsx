import { useState, useEffect } from "react";
import Ripple from "@/components/ui/ripple";
import newImage from "@/images/newdes.png";
import { useNavigate } from "react-router-dom"; 

const RippleDemo = () => {
  const [currentText, setCurrentText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const text = "Loading..."; 
    const interval = setInterval(() => {
      setCurrentText(text.slice(0, index + 1)); 
      setIndex((prevIndex) => (prevIndex + 1) % text.length); 
      if (index === text.length - 1) {
        setTimeout(() => navigate("/spider"), 3000);
      }
    }, 300); 

    return () => clearInterval(interval); 
  }, [index, navigate]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-crimson"
      role="alert"
      aria-live="polite"
    >
      <Ripple className="absolute inset-0" mainCircleSize={210} numCircles={8} animationDuration={2.0} />
      <img src={newImage} alt="Description" className="h-[30px] w-[30px]" />
      <p className="z-10 text-center text-[25px] font-medium tracking-tighter text-black">
        {currentText}
      </p>
    </div>
  );
};

export default RippleDemo;
