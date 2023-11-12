const Form = ({ setSearchParams, fetchMoviesFromApi }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
    form.reset();
    fetchMoviesFromApi(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
