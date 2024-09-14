import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text';
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
}) => {
  return (
    <div className={`${styles.inputWrapper} ${className || ''}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.inputField}
      />
    </div>
  );
};

export default Input;