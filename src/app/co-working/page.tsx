"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// MUI
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SingleImageCarousel from "@/components/carousel/SingleImageCarousel";

const images = [
  {
    label: "Prototype image - 1",
    imgPath: "/assets/static/images/co-working/prototype-1.png",
  },
  {
    label: "Prototype image - 2",
    imgPath: "/assets/static/images/co-working/prototype-2.png",
  },
  {
    label: "Prototype image - 3",
    imgPath: "/assets/static/images/co-working/prototype-3.png",
  },
  {
    label: "Prototype image - 4",
    imgPath: "/assets/static/images/co-working/prototype-4.png",
  },
  {
    label: "Prototype image - 5",
    imgPath: "/assets/static/images/co-working/prototype-5.png",
  },
];

export default function Co() {
  return (
    <>
      <main className="bg-white-10">
        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[80px] lg:px-[60px] lg:py-[140px] xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[172px]"
        >
          <div className="lg:flex lg:items-center xl:gap-5">
            <div className="mb-5 flex basis-1/2 items-center justify-center gap-3 lg:h-min lg:gap-5 xl:gap-10">
              <div className="w-[88px] md:w-[120px] lg:w-[140px] xl:w-[159px]">
                <Image
                  alt="Co working logo"
                  src="/assets/static/images/co-working/logo.png"
                  width={159}
                  height={82}
                  layout="responsive"
                />
              </div>
              <Divider orientation="vertical" flexItem />
              <p className="m-0 text-body-2 font-medium text-black-70 md:text-body-1 xl:text-paragraph-2">
                A co-working space web <br />
                application that enhances your <br />
                collaboration and productivity
              </p>
            </div>

            <motion.div
              className="m-auto w-[260px] max-w-[670px] basis-1/2 md:w-[400px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image
                alt="Co working application example"
                src="/assets/static/images/co-working/hero-img.png"
                width={670}
                height={448}
                layout="responsive"
              />
              <div className="pointer-events-none absolute left-0 top-0 h-[30vw] w-[30vw] bg-[#aedef0] opacity-[0.2] blur-3xl"></div>
              <div className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] bg-[#ffcfc1] opacity-[0.3] blur-3xl"></div>
            </motion.div>
          </div>
        </section>

        <section
          id="overview"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div className="xl:flex xl:gap-[100px]">
            <div className="basis-7/12">
              <Typography variant="h6">Overview</Typography>
              <Typography
                variant="body1"
                className="mb-5 mt-1 text-justify xl:mt-3"
              >
                Co. is a workspace web application designed based on idea aimed
                to improve collaboration and productivity of online co-working
                space. It composed of communication and productivity features
                that will greatly enrich work performance and collaboration
                among team members.
              </Typography>
            </div>
            <div className="flex basis-5/12 lg:mt-8 xl:mt-0">
              <div className="me-8 md:me-10 xl:me-[100px]">
                <Typography variant="h6">Role</Typography>
                <ul className="mt-1 list-inside list-disc p-0 xl:mt-3">
                  <li className="">
                    <Typography variant="body1" className="inline-block">
                      User Research
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      User Experience Design
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      User Interface Design
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      Visual Design
                    </Typography>
                  </li>
                </ul>
              </div>
              <div>
                <Typography variant="h6">Tool</Typography>
                <ul className="mt-1 list-inside list-disc p-0 xl:mt-3">
                  <li className="">
                    <Typography variant="body1" className="inline-block">
                      Figma
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      Adobe Photoshop
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      Adobe Illustrator
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" className="inline-block">
                      Miro
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="problem"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div>
            <Typography variant="h6">Problem</Typography>
            <Typography variant="body1" className="mt-1 text-justify xl:mt-3">
              The current online co-working spaces in the market doesn’t
              adequately meet customer needs. These platforms lack the essential
              features and intuitive interfaces required to enhance
              collaboration effectively. As a result, users struggle to maximize
              their productivity and teamwork potential within these
              environments. Addressing these usability and functionality gaps is
              vital to provide more effective and satisfying online workspace
              experiences.
            </Typography>
          </div>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="discover"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#66B2CC]">
            DISCOVER AND EMPATHIZE
          </Typography>
          <Typography variant="h2">Exploring the current issue</Typography>
          <Typography
            variant="body1"
            className="mt-2 text-justify lg:mt-4 xl:mt-5"
          >
            I started a secondary research to understand characteristic of
            online co-working space by testing a number of platforms in the
            market my self and accumulating users review of each platform to
            cursorily explore user frustrations and challenges.
          </Typography>

          <div className="m-auto mb-5 mt-2 md:mt-3 lg:mt-5 xl:mb-7 xl:mt-7">
            <Image
              alt="Social banner"
              src="/assets/static/images/co-working/social-banner.png"
              width={1180}
              height={160}
              layout="responsive"
            />
          </div>

          <Typography variant="h6">
            Gathering users problem and needs
          </Typography>
          <Typography variant="body1" className="mt-2 text-justify xl:mt-3">
            I started the primary research to empathize users by conducting user
            interview through video conferencing, targeting group of 5 users,
            ranging from 23-30 years old who have experiences in using online
            co-working space. These are some of the interview questions.
          </Typography>

          <Typography variant="subtitle2" className="mt-4 lg:mt-7">
            Goal : To identify users frustration and find opportunity to improve
            online co-working space
          </Typography>

          <ul className="ms-4 mt-1 list-disc p-0">
            <li>
              What are the goals you want to achieve while using virtual
              co-working space ?
            </li>
            <li>
              Have you ever experienced challenges or frustration while using
              co-working space ?
            </li>
            <li>
              What are features or aspects that online co-working space need to
              be improved ?
            </li>
          </ul>

          <Typography variant="body1" className="mt-2 lg:mt-6">
            You can read full user interview plan{" "}
            <Link
              href="https://docs.google.com/document/d/11kSaibyOJlJib6fkXA8lcCvkmL6AK_kUGhOIog4lAFs/edit?usp=sharing"
              className="text-[#66B2CC]"
              target="_blank"
            >
              here
            </Link>
            .
          </Typography>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="define"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#66B2CC]">
            DEFINE
          </Typography>
          <Typography variant="h2">Synthesize to define</Typography>
          <Typography
            variant="body1"
            className="mt-2 text-justify lg:mt-4 xl:mt-5"
          >
            Upon collecting the data, I synthesize the interview findings and
            transform them into an aggregated affinity diagram. This organized
            representation aids in identifying patterns and insights from the
            interview, facilitating a more comprehensive understanding of user
            needs and pain points.
          </Typography>

          <div className="m-auto mb-5 mt-2 md:mt-3 lg:mt-5 xl:mb-7 xl:mt-7">
            <Image
              alt="Synthesize to define"
              src="/assets/static/images/co-working/synthesize.png"
              width={1180}
              height={560}
              layout="responsive"
            />
          </div>

          <Typography variant="h6">
            Identifying pain points and insights
          </Typography>
          <Typography variant="body1" className="mt-2 text-justify xl:mt-5">
            After thoroughly synthesizing and analyzing the collected data, I
            decided to construct a problem statement. This effectively
            illustrates and clarifies the users pain points and insights,
            providing a concise and focused representation of their key
            challenges and needs. I finally identify 3 major pain points as
            followings :
          </Typography>

          <div className="m-auto mt-2 md:mt-3 lg:mt-5 xl:mt-7">
            <Image
              alt="User pain point"
              src="/assets/static/images/co-working/pain-point.png"
              width={1238}
              height={504}
              layout="responsive"
            />
          </div>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#66B2CC]">
            IDEATE
          </Typography>
          <Typography variant="h2">Generating and refining ideas </Typography>

          <Typography variant="h6" className="mt-3 md:mt-4 lg:mt-5 xl:mt-7">
            Idea exploration and moodboard
          </Typography>
          <Typography variant="body1" className="mt-2 text-justify xl:mt-5">
            While exploring idea of product structure and features, I focused on
            a multi-featured platform approach, taking inspiration from Slack as
            it provides a provident example of essential functionality. In terms
            of visual design and navigation, I opt for a clean and minimalistic
            trend to create a user-friendly and calm atmosphere.
          </Typography>

          <div className="m-auto mb-5 mt-2 md:mt-3 lg:mt-5 xl:mb-7 xl:mt-7">
            <Image
              alt="application idea"
              src="/assets/static/images/co-working/ideate.png"
              width={1180}
              height={455}
              layout="responsive"
            />
          </div>

          <Typography
            variant="body1"
            className="mt-6 text-justify xl:mb-7 xl:mt-7"
          >
            I also conducted a competitive audit to observe and assess potential
            of current online co-working space in the market.
          </Typography>

          <div className="mb-[48px] mt-5 h-[75vh] w-full xl:mb-[60px]">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNsERhWYFvpM_qR0qBcS8PEi9WAN2uLAZck_Q-cih6aVfRjNpQQMIQ1xhDnMeTOspxT3fLkkDidhl3/pubhtml?widget=true&amp;headers=false"
              className="h-full w-full"
            ></iframe>
          </div>

          <Typography variant="h6">
            Organizing contents and structure
          </Typography>
          <Typography variant="body1" className="mt-2 text-justify xl:mt-5">
            After gathering and listing ideas, I started to creating information
            architecture of webpage and working space page informed by previous
            research and defined problem. The working space interface and
            structure focuses on :
            <ul className="ms-4 mt-1 list-disc p-0 xl:mt-2">
              <li>Intuitive and user-friendly interface</li>
              <li>Effective co-working features</li>
              <li>Productive working atmosphere</li>
            </ul>
          </Typography>

          <div className="m-auto mb-5 mt-2 md:mt-3 lg:mt-5 xl:mb-7 xl:mt-7">
            <Image
              alt="Organizing structure"
              src="/assets/static/images/co-working/mindmap.png"
              width={1180}
              height={503}
              layout="responsive"
            />
          </div>

          <Typography variant="body1" className="mt-2 text-justify">
            Then I created wireframe to visualize product website and workspace
            interface and user tasks throughout the product to ensure that the
            wireframes were aligned with user needs and the overall product
            vision.
          </Typography>

          <div className="m-auto mt-2 md:mt-3 lg:mt-5 xl:mt-7">
            <Image
              alt="Organizing structure"
              src="/assets/static/images/co-working/lo-fi-img.png"
              width={1180}
              height={695}
              layout="responsive"
            />
          </div>
        </section>

        <div className="bg-black-80">
          <section
            id="prototype"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography variant="subtitle1" className="text-[#AADFF2]">
              PROTOTYPE
            </Typography>
            <Typography variant="h2" className="text-white-10">
              Hi-fidelity UI Design
            </Typography>
            <Typography
              variant="body1"
              className="mt-2 text-justify text-grey-20 lg:mt-5 xl:mt-7"
            >
              The visual design aims for simplicity and cleanliness, ensuring
              ease of comprehension and navigation through product for users. I
              apply visual aids like icons and 3D illustrations extensively to
              enhance the intuitiveness of product features. Visualization also
              plays a crucial role in crafting a better work environment within
              the product. I implemented scenery backgrounds along with a music
              player to alleviate the mundane and stressful aspects of the
              workspace. These features enable users to personalize their
              workspace, making it more suitable to their needs and reducing
              work-related boredom.
            </Typography>

            <Typography
              variant="body1"
              className="mt-4 text-justify text-grey-20 lg:mt-6 xl:mt-8"
            >
              Other than video conferencing and text chat features, I created a
              team board to facilitate simultaneous collaboration to enhance
              engagement within the workspace. Users can simultaneously create
              mind maps, attach materials such as images, files, and links to
              board etc. Moreover users can also search for all types of
              materials within the workspace, whether they are documents,
              images, or chat history, which simplifies material archiving and
              facilitates seamless transfers among team members.
            </Typography>
          </section>
        </div>

        <div className="bg-black-70">
          <section
            id="website-design"
            className="bg-black-70 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography
              variant="h6"
              className="mb-4 text-white-10 lg:mb-6 xl:mb-8"
            >
              WEBSITE DESIGN
            </Typography>

            <div className="flex gap-5 lg:gap-8 xl:gap-10">
              <div className="basis-1/2">
                <div>
                  <Typography
                    variant="subtitle2"
                    className="text-center text-grey-20"
                  >
                    Home page
                  </Typography>
                  <div className="m-auto mb-2 mt-2 lg:mb-6">
                    <Image
                      alt="Website Design - 1"
                      src="/assets/static/images/co-working/design-1.png"
                      width={550}
                      height={1329}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    className="text-center text-grey-20"
                  >
                    Workspace page
                  </Typography>
                  <div className="m-auto mt-2">
                    <Image
                      alt="Website Design - 2"
                      src="/assets/static/images/co-working/design-2.png"
                      width={550}
                      height={668}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div>
                  <Typography
                    variant="subtitle2"
                    className="text-center text-grey-20"
                  >
                    Feature page
                  </Typography>
                  <div className="m-auto mb-2 mt-2 lg:mb-6">
                    <Image
                      alt="Website Design - 3"
                      src="/assets/static/images/co-working/design-3.png"
                      width={550}
                      height={1076}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    className="text-center text-grey-20"
                  >
                    Contact page
                  </Typography>
                  <div className="m-auto mb-2 mt-2 lg:mb-6">
                    <Image
                      alt="Website Design - 4"
                      src="/assets/static/images/co-working/design-4.png"
                      width={550}
                      height={503}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    className="text-center text-grey-20"
                  >
                    Login page
                  </Typography>
                  <div className="m-auto mt-2">
                    <Image
                      alt="Website Design - 5"
                      src="/assets/static/images/co-working/design-5.png"
                      width={550}
                      height={394}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-black-80">
          <section
            id="workspace-design"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography
              variant="h6"
              className="mb-3 text-white-10 lg:mb-5 xl:mb-7"
            >
              WORKSPACE DESIGN
            </Typography>

            <SingleImageCarousel images={images} />
          </section>
        </div>

        <div className="bg-black-70">
          <section
            id="lesson-learned"
            className="bg-black-70 px-6 py-[60px] md:px-10 md:py-[80px] lg:px-[60px] lg:py-[120px] xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[160px]"
          >
            <div className="flex items-center gap-14">
              <div className="lg:basis-2/3">
                <Typography variant="h2" className="text-white-10">
                  Lesson Learned
                </Typography>
                <ul className="ms-4 mt-3 list-decimal p-0 text-justify text-grey-20 lg:mt-5">
                  <li className="mb-2 lg:mb-4">
                    User Research Plan : Planning thorough and comprehensive
                    user research plan to gain insights into the specific needs
                    and pain points of product target audience plays vital role
                    for product designing. Sketchy planning can mislead your
                    entire design direction, resulting in design that doesn’t
                    meet users need and problem.
                  </li>
                  <li>
                    Optimization for mobile : In the context of web application
                    design, it is evident that the current market demands a
                    focus on mobile users. Therefore, prioritizing the
                    optimization for mobile devices is necessary. However, as
                    the design contains numerous details and features that may
                    not function optimally on smaller mobile screens, it becomes
                    vital to embark on a more comprehensive research and
                    planning process for mobile design optimization.
                  </li>
                </ul>
              </div>
              <div className="hidden max-w-[412px] basis-1/3 lg:block">
                <Image
                  alt="Lesson learned"
                  src="/assets/static/images/co-working/lesson-learned-img.png"
                  width={412}
                  height={342}
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
