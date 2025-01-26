import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
  flex-direction: column;
  height: auto;
  }
`

export const ItemImg = styled.img`
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 0;
  }
  
`

export const ItemName = styled.span`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`
