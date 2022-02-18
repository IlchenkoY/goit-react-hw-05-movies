import PropTypes from 'prop-types';
import { ContainerWrap } from './Container.styled';

const Container = ({ title, children }) => {
  return (
    <ContainerWrap>
      {title && <h1>{title}</h1>}
      {children}
    </ContainerWrap>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export { Container };
