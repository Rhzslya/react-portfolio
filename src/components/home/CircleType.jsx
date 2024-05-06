import React, { useState, useEffect } from "react";

export default function CircleType() {
  const [text, setText] = useState("");

  useEffect(() => {
    getSpan(); // Panggil fungsi getSpan saat komponen dimuat
  }, []);

  const getSpan = () => {
    const originalText = "rizqi sabilla - web developer -";

    setText(
      originalText.split("").map((char, i) => (
        <span
          key={i}
          className="span__text"
          style={{ transform: `rotate(${i * 11}deg)` }}
        >
          {char}
        </span>
      ))
    );
  };

  return (
    <div className="circle__box">
      <div className="circle__text">
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
