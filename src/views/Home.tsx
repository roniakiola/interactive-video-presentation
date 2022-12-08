import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to={'/videos'} state={{ videoUrl: 'Asd' }}>
        Presentaatio 1
      </Link>
    </>
  );
};

export default Home;
