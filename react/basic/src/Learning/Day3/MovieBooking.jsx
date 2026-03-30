function MovieBooking({ movie }) {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${movie.imageurl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center px-10 text-white">
        {/* Content */}
        <h1 className="text-5xl font-bold mb-4">{movie.name}</h1>
        <h3 className="text-xl text-gray-300 mb-2">{movie.des}</h3>
        <p className="max-w-xl text-sm mb-6">{movie.desc}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-2 rounded-lg text-lg hover:bg-red-700 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-lg text-lg hover:bg-gray-800 transition">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieBooking;
