import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieCardLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #434c56;
  font-size: 25px;
`;

const MovieCardLinkItem = styled.li`
  & .active {
    text-decoration: underline;
  }
`;

const MovieCardLinkList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 15px;
  padding: 0;
`;

const MovieCard = styled.article`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const MovieCardDesc = styled.div`
  margin-left: 25px;
`;

export {
  MovieCard,
  MovieCardDesc,
  MovieCardLink,
  MovieCardLinkItem,
  MovieCardLinkList,
};
