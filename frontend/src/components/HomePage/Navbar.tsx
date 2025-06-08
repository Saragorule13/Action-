import Image from "next/image";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 relative top-0 w-full z-10">
      <div className="text-2xl items-center font-bold flex text-white">
        <Image
          src="/Dots.png"
          alt="Description of image"
          width={110}
          height={40}
        />

      </div>
      <div className="space-x-6 text-white text-xl tracking-wide">
        <Link href={'/Home'}>Home</Link>
        <Link href={'/Home'}>Profile</Link>
        <Link href={'/Home'}>Diary</Link>
        <Link href={'/Home'}>Watchlist</Link>
        <Link href={'/Home'}>Reviews</Link>
        <a href=""><button></button></a>
        <a href=""><button className="w-[150px] h-[45px] bg-[#4c7f70] rounded-[18px] cursor-pointer font-bold">+ Log Films</button></a>
      </div>
    </nav>
  );
}
