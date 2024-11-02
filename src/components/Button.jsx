/* eslint-disable react/prop-types */
import JSConfetti from "js-confetti";
import { useRef } from "react";
const Button = ({ text, acept }) => {
  const dimensiones = {
    ancho: window.innerWidth,
    alto: window.innerHeight,
  };
  const miElementoRef = useRef(null);
  const jsConfetti = new JSConfetti();

  const setPosItem = () => {
    if (miElementoRef.current) {
      let newTop = Math.floor(Math.random() * (dimensiones.alto - 100));
      let newLeft = Math.floor(Math.random() * (dimensiones.ancho - 100));

      // Aplicar la nueva posición
      miElementoRef.current.style.position = "absolute";
      miElementoRef.current.style.display = "block";
      miElementoRef.current.style.top = `${newTop}px`;
      miElementoRef.current.style.left = `${newLeft}px`;
    }
  };

  const handleClick = () => {
    if (text.includes("Si")) {
      console.log(text);
      acept();
      jsConfetti.addConfetti({
        emojis: ["❤️"],
        emojiSize: 40,
        confettiNumber: 300,
      });
    } else if (text.includes("No")) {
      setPosItem();
    }
  };

  return (
    <button
      ref={miElementoRef}
      onClick={handleClick}
      className={`border rounded-lg ${
        text.includes("No") ? "border-slate-600" : "border-red-400"
      } p-2 px-6 transition-all bg-red-200`}
    >
      {text}
    </button>
  );
};

export default Button;
