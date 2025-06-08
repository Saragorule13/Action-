'use client';


export default function Hero() {


  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center relative flex items-center justify-center text-center"
      style={{ backgroundImage: `url('/bg.jpg')` }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div> */}

      <div className="flex flex-col gap-4 absolute bottom-10">
        <h1 className="text-[28px] font-extralight">
          “Every viewer is going to get a different thing. <br/> That's the thing
          about cinema.”
        </h1>

        <div className="cursor-pointer">
          <button className="cursor-pointer hover:translate-0.5 w-[250px] h-[65px] bg-[#4c7f70] rounded-[20px] text-center justify-start text-white text-[22px] font-normal font-['Poppins']">Get Started - It's Free!</button>
        </div>
      </div>
    </section>
  );
}
