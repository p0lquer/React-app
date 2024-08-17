import { Counter } from "./Components/Counter";
import Usuarios from "./Components/Usuarios";
import { Contador } from "./Components/Contador";
import Timer from "./Components/Timer";
import { Formulario } from "./Components/Formulario";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <Usuarios />

      <h2>useEffet - useRef</h2>
      <hr />

      <Timer />

      <h2>UseReducer</h2>
      <hr />
      <Contador />
      <hr />
      <h2>Customs Hooks</h2>
      <Formulario />
    </>
  );
}

export default App;
