import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        height: auto;
        padding: 20px;
  }
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    @media (max-width: 600px) {
        min-width: 100%;
  }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`
