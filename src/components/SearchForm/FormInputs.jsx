const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
        id="sf-type-movies"
        className="mr-1"
      />
      <label htmlFor="sf-type-movies">Movie</label>
      <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
        id="sf-type-tv"
        className="mr-1"
      />
      <label htmlFor="sf-type-tv">TV Show</label>
    </div>
  );
};

export default MediaTypeInput;
