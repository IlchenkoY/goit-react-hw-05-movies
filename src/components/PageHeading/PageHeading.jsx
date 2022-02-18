import s from './PageHeading.module.css';

const PageHeading = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};
export { PageHeading };
