import React, { FC } from 'react';
import {Button as AriaButton} from 'react-aria-components';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({onPress, children}) => {
  return (
    <AriaButton onPress={onPress || (() => alert('Hello world!'))}>
      {children}
    </AriaButton>
  );
}

