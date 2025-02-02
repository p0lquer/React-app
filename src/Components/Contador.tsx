import { useReducer } from "react";

const initialState = {
  contador: 10,
};

type Action =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

export const Contador = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button
        onClick={() => dispatch({ type: "incrementar" })}
        className="btn btn-outline-primary"
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "decrementar" })}
        className="btn btn-outline-primary"
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: "custom", payload: 100 })}
        className="btn btn-outline-danger"
      >
        100
      </button>
    </>
  );
};

export default Contador;
