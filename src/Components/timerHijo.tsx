import { useEffect, useRef, useState } from "react";

type TimerArg = {
  milisegundos: number;
  segundos?: number;
};
export const TimerHijo = ({ milisegundos }: TimerArg) => {
  const [segundos, setSegundos] = useState(0);

  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);
  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};

export default TimerHijo;
