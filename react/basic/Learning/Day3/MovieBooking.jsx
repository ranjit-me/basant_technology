function MovieBooking(props) {
  let { obj } = props;
  let data = obj.map((value, index) => {
    return (
      <div
        key={index}
        className="hero"
        style={{ backgroundImage: `url(${value.imageurl})` }}
      >
        <div className="overlay">
          <h1>{value.name}</h1>
          <h4>{value.des}</h4>
          <p>{value.desc}</p>
          <div className="buttons">
            <div className="watch">Add to Watchlist</div>
            <div className="trailer">Trailer</div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{data}</div>;
}

export default MovieBooking;
