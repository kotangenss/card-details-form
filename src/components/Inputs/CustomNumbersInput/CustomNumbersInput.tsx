import { ChangeEvent, useState } from 'react';
import { CardNumberInputProps } from './CustomNumbersInput.interface';
import styles from './CustomNumbersInput.module.scss';

const formatCardNumber = (value: string): string => {
  return value.replace(/\D/g, '').substring(0, 3);
};

const CustomNumbersInput = ({
  name,
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  classNameInput,
  classNameLabel,
  onChange,
  maxLength,
}: CardNumberInputProps & { maxLength: number }): JSX.Element => {
  const [number, setNumber] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const formattedValue = formatCardNumber(value);
    setNumber(formattedValue);
    onChange(formattedValue);
  };

  return (
    <div className={styles['input-container']}>
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={number}
        placeholder={placeholder}
        {...hookData}
        className={`${classNameInput} ${errorMessage ? styles['input-error'] : ''}`}
        onChange={handleChange}
        maxLength={maxLength}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default CustomNumbersInput;
