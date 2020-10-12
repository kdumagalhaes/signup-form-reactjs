import styled from 'styled-components';

export const FormDiv = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

export const FormTag = styled.form`
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.primaryShadow};

  @media (max-width: 375px) {
    padding: 20px;
  }

  span {
    color: ${({theme}) => theme.colors.color1};
    margin-top: 5px;
    font-size: 0.65rem;
    font-weight: 600;
    font-style: italic;
    text-align: right;
  }



  p {
    font-size: 0.7rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.color5};
    font-weight: 600;

    @media (max-width: 375px) {
      display: block;
      max-width: 250px;
      margin: 0 auto;
    }

    a {
      color: ${({ theme }) => theme.colors.color1};
      font-weight: 800;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: hsl(0, 40%, 74%);
      }
    }
  }
`;
