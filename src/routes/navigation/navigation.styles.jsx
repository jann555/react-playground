import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 15px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 800px) {
    width: 60px;
    padding: 20px;
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 8px 10px;
  }
`
