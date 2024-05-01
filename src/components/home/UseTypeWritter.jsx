import React, { useState, useEffect, useRef } from "react";

const useTypewriter = (phrases, delay) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = useRef("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = phrases[phraseIndex];
      currentPhrase.current = currentText.substring(0, text.length + 1);
      setText(currentPhrase.current);

      if (text === currentText) {
        setTimeout(() => {
          setPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
          setText("");
        }, 1500); // Delay before typing next phrase
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, phrases, delay]);

  return text;
};

export default useTypewriter;
