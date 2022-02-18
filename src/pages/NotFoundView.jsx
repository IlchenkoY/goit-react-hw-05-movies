import errorImage from '../default-images/error.jpg';

const NotFoundView = () => {
  return (
    <div role="alert">
      <img src={errorImage} alt="Error 404" />
    </div>
  );
};

export { NotFoundView };
