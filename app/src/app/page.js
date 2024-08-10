import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ClickableImage from "@/components/ClickableImage.js";

import portfolioLogo from "../assets/portfilio-logo.png";
import nextLlama from "../assets/next-llama.png";
import amazonLogo from "../assets/amazon-logo.png";
import intelLogo from "../assets/intel-logo.png";
import emailLogo from "../assets/email-logo.png";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.jpg";

import Project from "../components/Project";
import Option from "../components/Option";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main className="relative w-11/12">
      <nav className="flex w-11/12 items-center">
        <Image
          src={portfolioLogo}
          alt="logo"
          // given a default width of 500px which will be overridden by tailwind
          width={500}
          draggable={false}
          className="mb-12 ml-8 mt-8 w-16 xl:mb-8 xl:w-20"
        />
      </nav>
      <div className="ml-8 flex w-auto flex-col gap-16 xl:ml-48 xl:gap-40">
        <section className="relative flex justify-between">
          <section className="flex flex-col gap-5">
            <p className="w-auto font-martel text-4xl text-black lg:text-7xl">
              Hey, I&apos;m <br className="lg:hidden" />
              <span className="text-6xl md:text-7xl">Larry Le.</span>
            </p>

            <ul className="flex list-none flex-col gap-1 xl:gap-2">
              <li>
                <p className="font-martel text-lg text-black xl:text-2xl">
                  Full-Stack Developer
                </p>
              </li>
              <li>
                <p className="font-martel text-lg text-black xl:text-2xl">
                  Engineer
                </p>
              </li>
              <li>
                <p className="font-martel text-lg text-black xl:text-2xl">
                  Computer Science B.S., 2028
                </p>
              </li>
            </ul>
          </section>

          <article className="absolute right-16 hidden flex-col gap-9 xl:flex">
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
          {/* break points can change the importance of certain classes, like with leading-relaxed */}
          <p className="font-martel text-3xl leading-relaxed xl:text-4xl xl:leading-relaxed">
            I&apos;m a recent high school grad who&apos;s been doing Software
            Development for a little over four years. I&apos;m a sucker for
            <span className="text-prim-2"> creating new things</span> and{" "}
            <span className="text-prim-2">building apps.</span>
          </p>
        </section>

        <section className="relative flex flex-col gap-5 xl:gap-7">
          <p className="font-league text-3xl xl:text-4xl">I&apos;m also an..</p>
          <p className="3xl:text-6-5xl text-4-5xl font-league xl:text-5xl 2xl:text-6xl">
            <span className="text-prim-3 font-league">Intel</span> AI For
            Accessibility Global Winner &apos;23
          </p>
          <p className="3xl:text-6-5xl text-4-5xl font-league xl:text-5xl 2xl:text-6xl">
            <span className="text-prim-4 font-league">Amazon</span> Future
            Engineer &apos;24
          </p>
          <p className="font-league text-base xl:text-lg">
            please look me up haha :D
          </p>
          <Image
            className="max-w-xxxs absolute bottom-20 right-64 hidden xl:block"
            src={intelLogo}
            alt="intel logo"
            width={500}
            height={500}
          />
          <Image
            className="max-w-xxs absolute bottom-16 right-24 hidden xl:block"
            src={amazonLogo}
            alt="amazon logo"
            width={500}
            height={500}
          />
        </section>

        <section className="flex flex-col gap-10">
          <p className="font-league text-4xl 2xl:text-5xl">
            And say hello to my latest project!
          </p>

          <Featured
            title={"Tailwind Llama"}
            image={nextLlama}
            link={"https://tailwind-llama.vercel.app/"}
            description={
              "Make learning Tailwind easy. Replicate cool designs, climb levels, and get useful information about your code."
            }
            linkPosition={"learning Tailwind easy"}
            bg={"bg-prim-6"}
          />
        </section>

        <section className="flex flex-col gap-8 xl:w-11/12 xl:flex-row xl:gap-20 2xl:w-10/12">
          <section className="flex xl:w-72 xl:justify-end">
            <p className="text-prim-2 font-league text-3xl">Other Projects</p>
          </section>
          <article className="flex w-full flex-col gap-10">
            <Project
              title={"Here-Charlie"}
              description={
                "An AI-powered robotic service dog engineered for people with visual disabilities. Endorsed by Intel from the AI Global Impact Festival."
              }
              link={"https://here-charlie.web.app/"}
            />

            <Project
              title={"FIRST Robotics Scouting App"}
              description={
                "Record and view data on different robotics teams to enhance strategy in the 2024 Crescendo competition."
              }
              link={"https://github.com/CyberLions-8521/scouting-app"}
            />
            <Project
              title={"OCSEF Experiment"}
              description={
                "Records the reaction time of students and teachers as they associate words to diagnose the possibility of learned helplessness."
              }
              link={"https://github.com/OCSEF-IAT/OCSEF-IAT.github.io"}
            />
          </article>
        </section>

        <section className="flex w-full flex-col gap-8 xl:w-10/12 xl:flex-row xl:gap-20">
          <section className="flex w-72 xl:justify-end">
            <p className="text-prim-2 font-league text-3xl">Skills</p>
          </section>
          <article className="grid w-full grid-cols-2 gap-5 xl:flex xl:gap-20">
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
      <footer className="relative mb-1 mt-32 flex w-full flex-col justify-between gap-2 xl:mb-3 xl:flex-row xl:gap-0 2xl:mb-5">
        <p className="order-2 font-league text-base lg:order-1 lg:text-2xl">
          ©2024 Larry Le MIT License
        </p>

        <ul className="static order-1 flex list-none justify-between lg:absolute lg:right-3 lg:order-2 lg:gap-5 xl:right-12 xl:gap-9">
          <li>
            <p className="text-prim-2 hover:text-prim-4 font-league text-3xl transition duration-200 ease-in-out lg:text-2xl xl:text-3xl">
              <Link href={"mailto:larryle704@gmail.com"}>Email</Link>
            </p>
          </li>
          <li>
            <p className="text-prim-2 hover:text-prim-4 font-league text-3xl transition duration-200 ease-in-out lg:text-2xl xl:text-3xl">
              <Link href={"https://github.com/Larry-Larriee"}>Github</Link>
            </p>
          </li>
          <li>
            <p className="text-prim-2 hover:text-prim-4 font-league text-3xl transition duration-200 ease-in-out lg:text-2xl xl:text-3xl">
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
