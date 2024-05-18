import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const onChangeValue = (e?: ChangeEvent<HTMLInputElement>) => {
    const text = e ? e.target.value : '';
    setValue(text);

    if (text.length < 5) {
      setError(null);
      setValidationError('Минимум 5');
    } else if (text.includes(' ')) {
      setError(null);
      setValidationError('Без пробелов');
    } else setValidationError(null);
  };

  const onBlur = (e?: ChangeEvent<HTMLInputElement>) => {
    const text = e ? e.target.value : '';
    if (!text) {
      setError('Поле необходимо заполнить');
    } else setError(null);
  };

  const onClearValue = () => {
    onChangeValue();
    onBlur();
  };

  return { value, error, validationError, onChangeValue, onBlur, onClearValue };
};
