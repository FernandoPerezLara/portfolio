import React, { useEffect, useState } from "react";

export default function TypeText() {
  const [word, setWord] = useState("");
  const [delay, setDelay] = useState(1000);
  const [isWriting, setIsWriting] = useState(true);
  const [selectedWord, setSelectedWord] = useState(0);
  const [position, setPosition] = useState(0);

  const list = ["React", "Python", "C#", "NodeJS", "JavaScript", "React Native", "C", "Visual Basic", "Arduino", "MATLAB", "SQL", "Angular", "R", "Verilog", "Go", "TypeScript", "Tensorflow"];
  
  useEffect(() => {
    const typeEffect = setTimeout(() => {
      if (isWriting === true) {
        if (position < list[selectedWord].length) {
          setWord(word + list[selectedWord].charAt(position));
          setPosition(position + 1);
          setDelay(100);
        } else {
          setIsWriting(false);
          setDelay(500);
        }
      } else {
        if (word.length > 0) {
          setWord(word.substring(0, word.length - 1));
          setDelay(40);
        } else {
          setIsWriting(true);
          setSelectedWord((selectedWord + 1) % list.length);
          setPosition(0);
          setDelay(300);
        }
      }
    }, delay);

    return () => clearInterval(typeEffect);
  });

  return (
    <span className="typewriter">and I love {word}</span>
  );
}