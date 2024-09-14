import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  className?: string;
}

const Button = ({
  label,
  variant = 'primary',
  isDisabled = false,
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${variant === 'secondary' ? styles.buttonSecondary : ''} ${className || ''}`;

  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;