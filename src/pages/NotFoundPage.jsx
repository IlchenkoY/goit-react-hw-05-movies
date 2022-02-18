import errorImage from '../default-images/error.jpg';

const NotFoundPage = () => {
  return (
    <div role="alert">
      <img src={errorImage} alt="Error 404" />
    </div>
  );
};

export default NotFoundPage;
