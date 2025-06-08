import MainHero from "@/components/HomePage/Hero";
import MainNavbar from "@/components/HomePage/Navbar";

export default function HomePage(){
    return(
        <div className="flex flex-col">
            <MainNavbar/>
            <MainHero/>
        </div>
    )
}