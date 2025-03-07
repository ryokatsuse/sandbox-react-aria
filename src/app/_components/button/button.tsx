import React, { FC } from 'react';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

/**
 * example of a button component
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */

// AriaButtonPropsを継承して独自のpropsを定義
export interface ButtonProps extends AriaButtonProps {}

export const Button: FC<ButtonProps> = (props) => {
  return <AriaButton {...props}>{props.children}</AriaButton>;
};

