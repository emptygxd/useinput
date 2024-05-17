import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);

    if (text.length < 5) {
      setError("Минимум 5");
    } else if (text.includes(" ")) {
      setError("Без пробелов");
    } else setError(null);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setError("Поле необходимо заполнить");
    } else setError(null);
  };

  const clear = () => {
    setValue("");
  };

  return { value, error, onChange, onBlur, clear };
};
