import FilmCard from "./FilmCard";

interface FilmGridProps {
  title: string;
  movies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
}

export default function FilmGrid({ title, movies }: FilmGridProps) {
  return (
    <section className="my-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[40px] font-semibold text-white">{title}</h2>
        <button className="bg-gray-700 px-4 py-1 rounded-full text-white text-sm">More</button>
      </div>
      <div className="grid grid-cols-8 gap-4">
        {movies.map((movie) => (
          <FilmCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
