import { getPopularMovies } from "@/app/lib/tmdb";
import FilmGrid from "./FilmGrid";

export default async function PopularFilms(){
    const popular = await getPopularMovies();
    return(
        <div>
            <FilmGrid title="Popular films this month" movies={popular.slice(0, 8)} />
        </div>
    )
}