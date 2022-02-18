import { Link, NavItem, NavList } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/">Home Page</Link>
        </NavItem>
        <NavItem>
          <Link to="/movies">Movies</Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
export { Navigation };
