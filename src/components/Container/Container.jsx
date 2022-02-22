import PropTypes from 'prop-types';
import { ContainerWrap } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export { Container };
