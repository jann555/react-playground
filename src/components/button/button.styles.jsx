import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/spinner.styles'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  aling-items: center;
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Break long words */

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 20px;
    font-size: 14px;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  @media (max-width: 800px) {
    min-width: 135px;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  @media (max-width: 800px) {
    min-width: 135px;
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  heigth: 30px;

  @media (max-width: 800px) {   
    width: 25px;
    height: 25px;
  }
`
