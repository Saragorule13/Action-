import Goat from "./Goat";
import PopularFilms from "./PopularFilms";
import UpcomingReleases from "./UpcomingReleases";

export default function MainHero(){
    return(
        <div className="p-[60px] flex flex-col gap-6">
            <div>
                <h1 className="text-white text-[40px] font-bold ">Hey, <span className="text-[#4c7f70]">Sara</span>!</h1>
                <div className="justify-start text-white text-xl font-extralight">It’s a beautiful day to rewatch and review your favourite films...</div>
            </div>

            <div>
                <PopularFilms/>
            </div>

            <div>
                <Goat/>
            </div>

            <div>
                <UpcomingReleases/>
            </div>
        </div>
    )
}