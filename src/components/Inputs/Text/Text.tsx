import styles from './Text.module.scss';
import { TextInputProps } from './Text.interface';

const TextInput = ({
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  classNameInput,
  classNameLabel,
}: TextInputProps): JSX.Element => {
  return (
    <div className={styles['input-container']}>
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...hookData}
        className={`${classNameInput} ${errorMessage ? styles['input-error'] : ''}`}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
