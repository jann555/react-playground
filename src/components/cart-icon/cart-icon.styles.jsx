import styled from 'styled-components'
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`

export const ShoppingIconContainer = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

  @media (max-width: 600px) {
    font-size: 8px;
    bottom: 10px;
  }
`
