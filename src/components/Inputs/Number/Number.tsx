import { ChangeEvent, useState } from 'react';
import { NumberInputProps } from './Number.interface';
import styles from './Number.module.scss';

const formatCardNumber = (value: string): string => {
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .toUpperCase()
    .trim();
};

const CardNumber = <TFieldName extends string>({
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  classNameInput,
  classNameLabel,
  maxLength,
}: NumberInputProps<TFieldName>): JSX.Element => {
  const [cardNumber, setCardNumber] = useState('');
  const { onChange, name } = { ...hookData };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
    onChange(event);
  };

  return (
    <div className={styles['input-container']}>
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={cardNumber}
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

export default CardNumber;
