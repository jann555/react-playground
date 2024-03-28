/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton

  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return CustomButton && (
        <CustomButton className={CustomButton}{...otherProps}>{ children }</CustomButton>
  )
}

export default Button
