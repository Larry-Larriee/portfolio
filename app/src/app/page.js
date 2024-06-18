import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ClickableImage from "@/components/ClickableImage.js";

import portfolioLogo from "../assets/portfilio-logo.png";
import hereCharlieLogo from "../assets/here-charlie-logo.jpg";
import amazonLogo from "../assets/amazon-logo.png";
import intelLogo from "../assets/intel-logo.png";
import emailLogo from "../assets/email-logo.png";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.jpg";

import Project from "../components/Project";
import Option from "../components/Option";

export default function Home() {
  return (
    <main className="relative w-11/12">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <nav className="flex w-11/12 items-center">
        <Image
          src={portfolioLogo}
          alt="logo"
          // given a default width of 500px which will be overridden by tailwind
          width={500}
          draggable={false}
          className="m-8 w-20"
        />
      </nav>

      <div className="ml-48 flex flex-col gap-40">
        <section className="relative flex justify-between">
          <section className="flex flex-col gap-5">
            <p className="text-black font-martel text-7xl">
              Hey, I&apos;m Larry Le.
            </p>

            <ul className="flex list-none flex-col gap-2">
              <li>
                <p className="text-black font-martel text-2xl">
                  {" "}
                  Full-Stack Developer{" "}
                </p>
              </li>
              <li>
                <p className="text-black font-martel text-2xl">Engineer</p>
              </li>
              <li>
                <p className="text-black font-martel text-2xl">
                  Computer Science B.S., 2028
                </p>
              </li>
            </ul>
          </section>

          <article className="absolute right-16 flex flex-col gap-9">
            <ClickableImage
              link={"mailto:larryle704@gmail.com"}
              image={emailLogo}
              alt={"email logo"}
            />
            <ClickableImage
              link={"https://github.com/Larry-Larriee"}
              image={githubLogo}
              alt={"Github logo"}
            />{" "}
            <ClickableImage
              link={"https://www.linkedin.com/in/le-larry"}
              image={linkedinLogo}
              alt={"Linkedin logo"}
            />
          </article>
        </section>

        <section>
          <p className="font-martel text-4xl leading-relaxed">
            I&apos;m a recent high school grad who&apos;s been doing Software
            Development for a little over four years. I&apos;m a sucker for
            <span className="text-primary-2">
              {" "}
              creating new things
            </span> and <span className="text-primary-2">building apps.</span>
          </p>
        </section>

        <section className="relative flex flex-col gap-7">
          <p className="font-league text-4xl">I&apos;m also an..</p>
          <p className="text-6-5xl font-league">
            <span className="font-league text-primary-3">Intel</span> AI For
            Accessibility Global Winner &apos;23
          </p>
          <p className="text-6-5xl font-league">
            <span className="font-league text-primary-4">Amazon</span> Future
            Engineer &apos;24
          </p>
          <p className="font-league text-lg">please look me up haha :D</p>
          <Image
            className="absolute bottom-20 right-64 max-w-xxxs"
            src={intelLogo}
            alt="intel logo"
            width={500}
            height={500}
          />
          <Image
            className="absolute bottom-16 right-24 max-w-xxs"
            src={amazonLogo}
            alt="amazon logo"
            width={500}
            height={500}
          />
        </section>

        <section className="flex flex-col gap-10">
          <p className="font-league text-5xl">
            And say hello to my latest project!
          </p>

          <div className="w-charlie-custom flex flex-col items-center gap-12 rounded-2xl bg-primary-2 py-14">
            <article className="flex w-10/12 items-center gap-10">
              <p className="font-league text-9xl font-bold text-white">
                Here-Charlie
              </p>
              <Image
                src={hereCharlieLogo}
                alt="here-charlie logo"
                width={500}
                height={500}
                className="w-32"
              />
            </article>

            <p className="w-10/12 font-league text-4xl leading-relaxed text-white">
              An AI-powered robotic service dog engineered for people with{" "}
              <span className="text-primary-3 transition duration-200 ease-in-out hover:cursor-pointer hover:text-primary-2">
                <Link href={"https://here-charlie.web.app/"}>
                  visual disabilities
                </Link>
              </span>
            </p>
          </div>
        </section>

        <section className="flex w-10/12 gap-20">
          <section className="flex w-72 justify-end">
            <p className="font-league text-3xl text-primary-2">
              Other Projects
            </p>
          </section>
          <article className="flex w-full flex-col gap-10">
            <Project
              title="FIRST Robotics Scouting App"
              description="Record and view data on different robotics teams to enhance strategy in the 2024 Crescendo competition."
              link="https://github.com/CyberLions-8521/scouting-app"
            />
            <Project
              title="OCSEF Experiment"
              description="Records the reaction time of students and teachers as they associate words to diagnose the possibility of learned helplessness."
              link="https://github.com/OCSEF-IAT/OCSEF-IAT.github.io"
            />
          </article>
        </section>

        <section className="flex w-10/12 gap-20">
          <section className="flex w-72 justify-end">
            <p className="font-league text-3xl text-primary-2">Skills</p>
          </section>
          <article className="flex w-full gap-20">
            <Option
              title="Languages"
              description={{
                1: "Javascript",
                2: "Python",
                3: "Java",
                4: "Lua",
                5: "CSS",
                6: "HTML",
              }}
            />
            <Option
              title="Frameworks"
              description={{
                1: "Next.js",
                2: "React Native",
                3: "Express.js",
                4: "Tailwind",
              }}
            />
            <Option
              title="Tools"
              description={{
                1: "Github",
                2: "MongoDB",
                3: "Postman",
                4: "Nginx",
                5: "Firebase",
                6: "Vercel",
                7: "Google Cloud",
                8: "Android Studio",
                9: "Xcode",
              }}
            />
            <Option
              title="Design"
              description={{
                1: "Figma",
                2: "Canva",
                3: "Invision",
                4: "Wireframing",
              }}
            />
          </article>
        </section>
      </div>

      <footer className="relative mb-5 mt-32 flex w-full justify-between">
        <p className="font-league text-2xl">©2024 Larry Le MIT License</p>

        <ul className="absolute right-16 flex list-none gap-10">
          <li>
            <p className="font-league text-3xl text-primary-2 transition duration-200 ease-in-out hover:text-primary-4">
              <Link href={"mailto:larryle704@gmail.com"}>Email</Link>
            </p>
          </li>
          <li>
            <p className="font-league text-3xl text-primary-2 transition duration-200 ease-in-out hover:text-primary-4">
              {" "}
              <Link href={"https://github.com/Larry-Larriee"}>Github</Link>
            </p>
          </li>
          <li>
            <p className="font-league text-3xl text-primary-2 transition duration-200 ease-in-out hover:text-primary-4">
              {" "}
              <Link href={"https://www.linkedin.com/in/le-larry"}>
                Linkedin
              </Link>
            </p>
          </li>
        </ul>
      </footer>
    </main>
  );
}
