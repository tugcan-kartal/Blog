import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/AboutPage-Me.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-[10vh] gap-x-[10vw]">

        <div>

          <div className="flex flex-col gap-y-[2vh]">
            <div className="text-lg">Software Developer</div>
            <div className="text-5xl">
              <div>Hello I'm</div>
              <div>Tugcan Kartal</div>
            </div>

            <div className="text-md">
              <div>With my love for the software world and my experience,</div>
              <div>I approach every project with excitement and strive</div>
              <div>to deliver the best user experience possible.</div>
            </div>

            <div>
              <Link href={"https://drive.google.com/file/d/1-eGxsicrT1ULDmyJr2ZdiIHbTZxHyNLR/view?usp=sharing"}>DOWNLOAD CV</Link>
              <div>
                <Link href={"https://github.com/tugcan-kartal"}>Github</Link>
                <Link href={"https://www.linkedin.com/in/tugcan-kartal"}>LinkedIn</Link>
                <Link href={"mailto:tugcankartal01@gmail.com"}>E-mail</Link>
              </div>
            </div>
          </div>

        </div>

        <div>
          <Image className="w-[20vw]" src={Me} alt="not found"/>
        </div>

      </div>
    </div>
  );
}
