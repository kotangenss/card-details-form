import { ChangeEvent, useState } from 'react';
import styles from './Text.module.scss';
import { TextInputProps } from './Text.interface';

const formatText = (value: string): string => {
  const match = value.match(/^\S*(?:\s\S*)?/);
  return match ? match[0] : '';
};

const TextInput = <TFieldName extends string>({
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  classNameInput,
  classNameLabel,
}: TextInputProps<TFieldName>): JSX.Element => {
  const [text, setText] = useState('');
  const { onChange } = { ...hookData };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const formattedValue = formatText(value);
    setText(formattedValue);
    if (onChange) {
      event.target.value = formattedValue;
      onChange(event);
    }
  };

  return (
    <div className={styles['input-container']}>
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={text}
        placeholder={placeholder}
        {...hookData}
        className={`${classNameInput} ${errorMessage ? styles['input-error'] : ''}`}
        onChange={handleChange}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
