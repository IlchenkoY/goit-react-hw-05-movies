import { Link, NavItem, NavList } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/" state={{ from: location }}>
            Home Page
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
export { Navigation };
