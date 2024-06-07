export interface TextInputProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  hookData: object;
  errorMessage?: string;
  classNameInput?: string;
  classNameLabel?: string;
  isValid?: boolean;
}
