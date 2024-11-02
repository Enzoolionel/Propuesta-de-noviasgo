import { useState } from "react";
import Button from "./Button";

const Card = () => {
  const [acept, setAcept] = useState(false);

  return (
    <section className="bg-red-400 w-screen h-screen flex justify-center items-center">
      <article
        className={`${
          acept ? "blur-sm" : ""
        } h-44 w-64 flex flex-col justify-between py-4 pt-8 items-center bg-red-200 rounded-lg`}
      >
        <h1 className="font-bold text-red-400">¿Queres ser mi novia?</h1>
        <div className="flex gap-3">
          <Button text="Si! 🥰" acept={() => setAcept(!false)} />
          <Button text="No. 😓" />
        </div>
      </article>

      {acept ? (
        <div className="h-56 w-80 bg-red-200 text-slate-700 bg-opacity-80 absolute rounded-xl flex flex-col justify-center items-center transition-all">
          <button
            onClick={() => setAcept(!true)}
            className="absolute right-4 top-4"
          >
            ❌
          </button>
          <h1 className="text-3xl font-bold mb-5">¡Lo sabia mi amor!</h1>
          <h2 className="text-xl font-bold ">Te amo ❤️❤️❤️❤️</h2>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Card;
