import React, { type FC } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import styles from "./button.module.css";
/**
 * example of a button component
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */

// AriaButtonPropsを継承して独自のpropsを定義
export interface ButtonProps extends AriaButtonProps {}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <AriaButton className={styles.root} {...props}>
      {props.children}
    </AriaButton>
  );
};
