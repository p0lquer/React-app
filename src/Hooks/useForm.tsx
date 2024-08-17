import { ChangeEvent, useState } from "react";

export function useForm<T>(initState: T) {
  // export const useForm = (iniState: any) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form,
  };
}
