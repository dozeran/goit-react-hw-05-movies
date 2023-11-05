const Home = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
