import styled from 'styled-components';

const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  justify-content: center;

  @media screen and (min-width: 870px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { CastList };
