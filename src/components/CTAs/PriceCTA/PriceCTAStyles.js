import styled from 'styled-components';

export const PriceCTADiv = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.color3};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.primaryShadow};
  margin-bottom: 30px;

  span {
    color: #fff;
    text-align: center;

    @media (max-width: 375px) {
        display: block;
        width: 190px;
        margin: 0 auto;
    }
  }
`;
