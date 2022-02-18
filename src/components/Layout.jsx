import { Outlet } from 'react-router-dom';
import Appbar from './AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};

export { Layout };
