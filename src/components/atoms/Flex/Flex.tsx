import { FlexDirection, AlignItems, JustifyContent, FlexWrap, FlexGap } from '../../../shared/styles/styles';
import { ReactNode } from 'react';

interface FlexProps {
  direction?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: FlexGap;
  wrap?: FlexWrap;
  padding?: string;
  margin?: string;
  children: ReactNode;
  className?: string;
}

const Flex = ({
  direction,
  alignItems,
  justifyContent,
  gap,
  wrap,
  padding,
  margin,
  className,
  children,
}: FlexProps) => {
  const flexStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
    flexWrap: wrap,
    gap,
    padding,
    margin,
  };

  return (
    <div style={flexStyle} className={className}>
      {children}
    </div>
  );
};

export default Flex;
