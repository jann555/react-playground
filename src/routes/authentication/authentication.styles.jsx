import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    width: 900px;

    @media (max-width: 1200px) {
    width: 80%;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`
