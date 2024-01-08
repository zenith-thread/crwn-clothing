import {BaseButton, GoogleSignIn, InvertedButton} from './Button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
)

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButtonType(buttonType)
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button