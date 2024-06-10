import { UseFormRegisterReturn } from 'react-hook-form';

export interface NumberInputProps<TFieldName extends string> {
  name: TFieldName;
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
