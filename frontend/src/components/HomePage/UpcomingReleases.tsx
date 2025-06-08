import { getUpcomingMovies } from "@/app/lib/tmdb"
import FilmGrid from "./FilmGrid"

export default async function UpcomingReleases(){
    const films = await getUpcomingMovies()
    return(
        <div>
            <FilmGrid title="Upcoming Releases" movies={films.slice(0,8)}/>
        </div>
    )
}