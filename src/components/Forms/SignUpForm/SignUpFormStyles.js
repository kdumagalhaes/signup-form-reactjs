import styled from 'styled-components';

export const FormDiv = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTag = styled.div`
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: ${({theme}) => theme.borderRadius};
  box-shadow: ${({theme}) => theme.primaryShadow};

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
`;
