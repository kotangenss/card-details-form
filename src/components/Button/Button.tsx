import { ButtonProps } from './Button.interface';

const Button = ({ label, type, className = '', disabled = false }: ButtonProps): JSX.Element => {
  disabled = disabled === undefined ? false : disabled;

  return (
    <button className={className} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
