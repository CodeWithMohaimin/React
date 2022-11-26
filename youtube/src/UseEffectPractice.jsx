import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const useEffectPractice = () => {
  const [date, setDate] = useState(new Date());

  const tic = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => {
      tic();
    }, 1000);
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default useEffectPractice;
