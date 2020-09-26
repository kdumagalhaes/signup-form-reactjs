import styled from 'styled-components';

export const CTADiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    width: 100%;
    color: #fff;
  }

  h1 {
    font-size: 2.8rem;
    max-width: 450px;
    line-height: 42px;
    margin-bottom: 25px;
    text-align: left;
  }

  p {
    font-weight: 600;
    font-size: 0.9rem;
    max-width: 500px;
  }
`;
