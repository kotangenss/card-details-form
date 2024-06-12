export interface ButtonProps {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
