import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media (max-width: 600px) {
    width: 48%;
    margin-bottom: 10px;

    &:last-child {
      width: 48%;
    }
  }
`

export const TotalItems = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`
