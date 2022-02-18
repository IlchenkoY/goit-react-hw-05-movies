import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ListItemImg = styled.img`
  transition: 0.2s linear;
  border-radius: 8px;
  height: inherit;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transform: translateY(-2px) scale(1.01);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray; /* IE 6-9 */
  }
`;

export { List, ListItemImg };
