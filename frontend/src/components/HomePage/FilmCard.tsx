import Link from 'next/link'
interface FilmCardProps{
    movie:{
        id: number;
        title: string;
        poster_path: string;
    }
}

export default function FilmCard({movie}: FilmCardProps){
    return(
        <Link href={`/movie/${movie.id}`}>
      <div className="rounded hover:scale-105 transition cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="rounded w-full"
        />
      </div>
    </Link>
    )
}