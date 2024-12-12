import Image from '../components/Image';

export default function MovieDetails() {
  return (
    <div className="movie-details">
      <h1>Movie Details Page</h1>
      <Image 
        src="https://example.com/movie-poster.jpg"
        alt="Movie poster"
        className="movie-poster"
        loading="eager"
        fallback="/src/assets/placeholder-movie.jpg"
      />
    </div>
  );
} 