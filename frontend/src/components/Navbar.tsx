import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black to-transparent absolute top-0 w-full z-10">
      <div className="text-2xl items-center font-bold flex text-white">
        <Image
          src="/Dots.png"
          alt="Description of image"
          width={110}
          height={40}
        />

        <span className="ml-2 text-[40px]">Action!</span>
      </div>
      <div className="space-x-6 text-white text-sm uppercase tracking-wide">
        <a href="#">Sign In</a>
        <a href="#">Create Account</a>
        <a href="#">Films</a>
        <a href="https://github.com/Saragorule13">Github</a>
        <a href="https://www.linkedin.com/in/sara-gorule/">LinkedIn</a>
      </div>
    </nav>
  );
}
