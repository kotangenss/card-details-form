export interface CardNumberInputProps {
  name: string;
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  hookData: object;
  errorMessage?: string;
  classNameInput?: string;
  classNameLabel?: string;
  maxLength: number;
  isValid?: boolean;
  onChange: (value: string) => void;
}
