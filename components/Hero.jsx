import Image from "next/image";
import Projects from "@/data/projects.json";
import Socials from "@/data/socials.json";
export default function Hero() {
    return (
        <section className="w-[20rem] md:w-[40rem] lg:w-[40rem]">
            <Image
                src="https://github.com/priyankarpal.png"
                className="rounded-full pb-3"
                alt="priyankar's profile image"
                width={80}
                height={80}
                priority={true}

            />
            <span className="text-[2rem] font-[600]">
                hello, 👋 I’m priyankar pal
            </span>{" "}
            <span className="text-secondary">(he/him)</span>
            <p className="pt-5 text-secondary text-[1.2rem]">
                I do front end development using{" "}
                <span className="font-bold">Next.js,</span>{" "}
                <span className="font-bold">Tailwind css,</span>{" "}
                <span className="font-bold">Typescript,</span>{" "}
                <span className="font-bold">JavaScript</span> etc. Also, I am an{" "}
                <span className="font-bold">open source contributor</span> &{" "}
                <span className="font-bold"> projects maintainer.</span> Sometimes I
                share my experiences on{" "}
                <a
                    href="https://itspp.hashnode.dev"
                    target="_blank"
                    rel="noopener"
                    className="underline font-bold"
                >
                    {" "}
                    hashnode.
                </a>
            </p>
            {/* for projects section */}
            <div className="flex flex-col">
                <span className="text-[1.5rem] font-bold pt-5">work samples 🧠</span>
                <span className="text-secondary">check few sample works </span>
            </div>
            <div className="flex flex-col pt-5">
                {Projects.map((project, i) => (
                    <span key={i} className="text-[1.3rem]">
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener"
                            className="font-semibold leading-loose"
                        >
                            {" "}
                            <u>
                                {project.title.charAt(0).toUpperCase() + project.title.slice(1)}{" "}
                            </u>
                            -
                        </a>{" "}
                        <span className="text-secondary">{project.description}</span>
                    </span>
                ))}
            </div>
            {/* 
            
            for contact me section                    
            */}
            <p className="pb-5"></p>
            <span className="text-[1.5rem] font-bold">reach me ✉️</span>
            <div className="grid grid-cols-4 lg:grid-cols-6">
                {Socials.map((item, i) => (
                    <span key={i}>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener"
                            className="text-secondary leading-loose text-[1.2rem] hover:underline"
                        >
                            {" "}
                            {item.title}
                        </a>{" "}
                    </span>
                ))}
            </div>
        </section>
    );
}
