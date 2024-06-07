import { ChangeEvent, useState } from 'react';
import { CardNumberInputProps } from './CardNumber.interface';
import styles from './CardNumber.module.scss';

const formatCardNumber = (value: string): string => {
  return value
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

const CardNumber = ({
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
}: CardNumberInputProps): JSX.Element => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
    onChange(formattedValue.replace(/\s/g, ''));
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
        value={cardNumber}
        placeholder={placeholder}
        {...hookData}
        className={`${classNameInput} ${errorMessage ? styles['input-error'] : ''}`}
        onChange={handleChange}
        maxLength={19}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default CardNumber;
