import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

${BaseButton},
${GoogleSignInButton},
${InvertedButton} {
  margin-top: auto;
}

@media (max-width: 800px) {
  width: 180px;
  right: 20px;
}

@media (max-width: 500px) {
  width: 98vw;
  min-width: 0;
  right: 1vw;
  left: 1vw;
  top: 70px;
  padding: 10px;
  height: 60vw;
  max-height: 320px;
}
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  @media (max-width: 800px) {
    font-size: 16px;
  } 
  @media (max-width: 500px) {
    font-size: 14px;
    margin: 20px auto;
  }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media (max-width: 800px) { 
    height: 180px;
  }
  @media (max-width: 500px) {
    height: 120px;
  }
`
