import Image from "next/image";
import HeroImage from "@/../public/HomePage-Hero.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-x-[10vw]">
        
        <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Better Design for Your Digital Products
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-gray-600 leading-relaxed">
            Turning your idea into reality. We bring together the best teams from the global tech industry.
          </p>

          <Link href="/portfolio">
            <div className="inline-block bg-blue-600 text-white text-sm sm:text-lg lg:text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              See Our Works
            </div>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image src={HeroImage} alt="Hero Image" priority />
        </div>

      </div>
    </div>
  );
}
