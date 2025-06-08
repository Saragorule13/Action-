import { getHighestRated } from "@/app/lib/tmdb";
import FilmGrid from "./FilmGrid";

export default async function Goat(){
    const goat = await getHighestRated();

    return(
        <>
         <FilmGrid title="Greatest of all time" movies={goat.slice(0,8)}/>
        </>
    )
}