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

export const FormTag = styled.div`
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

  input {
    margin-bottom: 20px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-weight: 500;

    &:focus {
      border: 1px solid #282828;
    }
  }

  span {
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
