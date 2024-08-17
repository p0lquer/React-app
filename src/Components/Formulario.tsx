import { useForm } from "../Hooks/useForm";

interface IForm {
  email: string;
  name: string;
  edad: number;
}

export const Formulario = () => {
  const { email, edad, name, form, handleChange } = useForm<IForm>({
    email: "cristian@qa.com",
    name: "Beltre",
    edad: 0,
  });

  //   const { email, name, edad } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email address:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Formulario;
