/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import './sign-up-form.styles.scss'
import { signUpStart } from '../../store/user/user.action'
const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormfields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = formFields

    if (password !== confirmPassword) {
      alert('Password and Confirm Password fields do not match')
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. User email is already in use')
      }
      console.error('User creation encountered an error: ', error)
    }
  }
  return (
        <div className="sign-up-container">
            <h2>Don`&apos;`t have an account? Sign Up</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type='text'
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type='email'
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                    />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}/>

                <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign Up</Button>
            </form>
        </div>
  )
}

export default SignUpForm
