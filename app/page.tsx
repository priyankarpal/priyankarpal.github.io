import GSSOC from "@/components/community/gssoc";
import ReactPlay from "@/components/community/reactplay";
import GoGreen from "@/components/projects/gogreen";
import ProjectsHut from "@/components/projects/projectshut";
import Image from "next/image";
export default function Home() {
  // social media links
  const github_url = "http://github.com/priyankarpal";
  const x_url = "http://x.com/priyankarpal";
  const linkedin_url = "http://linkedin.com/in/priyankarpal";
  const email_url = "mailto:priyankarpal9@gmail.com";
  const hashnode_url = "https://itspp.hashnode.dev/";
  const reactplay_url = "https://github.com/reactplay/react-play";
  const projectshut_url = "https://github.com/priyankarpal/projectshut";
  const playstore_url =
    "https://play.google.com/store/apps/dev?id=7166668392984578038&gl=US";

  return (
    <section className="flex justify-center items-center m-6 sm:mt-8 sm:mb-8 ">
      <main className=" w-[60rem] flex flex-col items-start ">
        <Image
          src="/hello.jpg"
          alt="hello world!"
          className="rounded-sm"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-semibold mt-2">Priyankar Pal</h1>

        {/* for social media */}
        <div className="flex gap-3 mt-5 underline cursor-pointer text-[1.1rem]">
          <a target="_blank" href={github_url}>
            github
          </a>
          <a target="_blank" href={x_url}>
            x
          </a>
          <a target="_blank" href={linkedin_url}>
            linkedin
          </a>
          <a href={email_url}>email</a>
        </div>

        {/*  about me */}
        <div className="mt-5 space-y-3">
          <p>
            i do front-end development using next.js, tailwind css, typescript,
            javascript etc & started learning back-end development. also, i am
            an open source contributor & projects maintainer at{" "}
            <a
              href={projectshut_url}
              target="_blank"
              className="underline  font-medium"
            >
              projectshut
            </a>{" "}
            &{" "}
            <a
              href={reactplay_url}
              target="_blank"
              className="underline font-medium"
            >
              reactplay.io
            </a>
            . sometimes i write on{" "}
            <a
              href={hashnode_url}
              target="_blank"
              className="underline font-medium"
            >
              hashnode.
            </a>
          </p>
          <p>
            when i was in high school i developed my first cross platform app
            using flutter & published to{" "}
            <a
              href={playstore_url}
              target="blank"
              className="underline font-medium"
            >
              play store.
            </a>{" "}
            though the apps are simple, i learned new things that have inspired
            me a lot to work in tech.{" "}
          </p>
          <p>
            after joining university i developed a simple web page for a{" "}
            <span className="font-medium">local client(e-rickshaws store)</span>{" "}
            & earned a few bucks in freshman year. that year i participated
            first in person hackathon (mlh powered) with my teammates & we built
            a full stack level project. although we didn&lsquo;t win, but
            learned a lot from that hackathon.
          </p>

          {/* community works */}
          <div className="space-y-3 ">
            <p className="font-semibold">*working with communities</p>
            {/*  according to the date  */}
            <ReactPlay />
            <GSSOC />
            <p className="pl-2">
              not only am i involved in these communities, but i also
              collaborate with others, helping newcomers in getting started with
              open-source contributions, project development, and more globally.
            </p>
          </div>

          {/* projects */}
          <div className="space-y-3 ">
            <p className="font-semibold">*projects building</p>
            <ProjectsHut />
            <GoGreen />
            <p className="pl-2">
              these two projects are like superheroes they&apos;ve successfully
              completed their missions. as for the other projects, they&apos;re
              still in superhero training, so I didn&apos;t want to embarrass
              them by including here. Just kidding, they&apos;re just having a
              coffee break!
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
