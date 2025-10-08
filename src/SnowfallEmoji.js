import React, { useEffect, useState } from "react";

const Snowflake = ({ x, y, size, delay }) => (
  <div
    style={{
      position: "fixed",
      top: y,
      left: x,
      fontSize: size,
      animation: `fall 10s linear infinite`,
      animationDelay: delay,
      pointerEvents: "none",
      userSelect: "none",
            zIndex: 9999,  // เพิ่มตรงนี้

    }}
  >
    ❄️
  </div>
);

const SnowfallEmoji = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const newFlakes = [];
    for (let i = 0; i < 50; i++) {
      newFlakes.push({
        x: Math.random() * window.innerWidth,
        y: -10 - Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 10 + "s",
        id: i,
      });
    }
    setFlakes(newFlakes);
  }, []);

  return (
    <>
      {flakes.map(({ x, y, size, delay, id }) => (
        <Snowflake key={id} x={x} y={y} size={size} delay={delay} />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(110vh); }
        }
      `}</style>
    </>
  );
};

export default SnowfallEmoji;