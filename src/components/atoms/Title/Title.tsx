import { TitleType, FontWeight } from '../../../shared/styles/styles';
import { CSSProperties, ReactNode } from 'react';
import styles from './Heading.module.scss';

interface TitleProps {
  variant: TitleType;
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
  weight?: FontWeight;
  margin?: string;
  className?: string;
}

const Title = ({ variant, children, color = '#2c2c2c', style, weight, className, margin }: TitleProps) => {
  const titleStyle: CSSProperties = {
    color: color,
    margin: margin,
    ...style,
  };

  const Tag = variant;

  return (
    <Tag style={titleStyle} className={`${styles[variant]} ${weight ? styles[weight] : ''} ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;
