import Image from "next/image";
import HeroImage from "@/../public/HomePage-Hero.svg"

export default function Home() {
  return (
    <div>
      <div className="flex mx-auto mt-[20vh]">

        <div className="flex flex-col gap-y-[5vh]">
          <div className="text-6xl">
            Better design for your digital products.
          </div>

          <div className="text-2xl">
            Turning your Idea into Reality. We bring together the teams from the global tech industry.
          </div>

          <button className="text-xl bg-[#1533DC] w-[25vw] h-[5vh] rounded-lg">See Our Works</button>
        </div>

        <div>
          <Image src={HeroImage} alt="not found"/>
        </div>

      </div>
    </div>
  );
}
