import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #434c56;
  font-size: 18px;
`;

const NavItem = styled.li`
  & .active {
    color: #fff;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 15px;
  padding: 0;
`;

export { Link, NavItem, NavList };
