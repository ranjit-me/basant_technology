import { moviedata } from "./Movie";
import MovieBooking from "./MovieBooking";

function MovieView() {
  return (
    <div>
      {moviedata.map((item, index) => (
        <MovieBooking key={index} movie={item} />
      ))}
    </div>
  );
}
export default MovieView;
