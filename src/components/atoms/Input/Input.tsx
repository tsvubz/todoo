import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text';
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  className,
}) => {
  return (
    <div className={`${styles.inputWrapper} ${className || ''}`}>
      {label && <label className={styles.inputLabel}>{label}</label>}
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