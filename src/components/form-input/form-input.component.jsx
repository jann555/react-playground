/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { FormInputLabel, Input, Group } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput
