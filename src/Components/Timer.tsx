import { useState } from "react";
import { TimerHijo } from "./timerHijo";

export const Timer = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <>
      <span>Milisegundos{milisegundos}</span>
      <br />

      <button
        onClick={() => setMilisegundos(1000)}
        className="btn btn-outline-success"
      >
        1000
      </button>
      <button
        onClick={() => setMilisegundos(2000)}
        className="btn btn-outline-success"
      >
        2000
      </button>
      <TimerHijo milisegundos={milisegundos} />
    </>
  );
};

export default Timer;
