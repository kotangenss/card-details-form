import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextInputProps<TFieldName extends string> {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  hookData: UseFormRegisterReturn<TFieldName>;
  errorMessage?: string;
  classNameInput?: string;
  classNameLabel?: string;
  maxLength: number;
  isValid?: boolean;
}
