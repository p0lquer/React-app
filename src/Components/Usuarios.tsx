import { useState } from "react";

interface IUsers {
  name: string;
  uuid: string;
}

// const tempUser: IUsers = {
//   uuid: "DCOUAOF",
//   name: "Cristian",
// };

export const Usuarios = () => {
  const [users, setUsers] = useState<IUsers>();

  const login = () => {
    setUsers({
      name: "Cristian",
      uuid: "1234",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuarios</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!users ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(users)}</pre>}
    </div>
  );
};

export default Usuarios;
