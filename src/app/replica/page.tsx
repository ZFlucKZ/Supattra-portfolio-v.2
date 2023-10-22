"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// MUI
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Component
import QuadImageCarousel from "@/components/carousel/QuadImageCarousel";

// useHooks
import { useWindowSize } from "@uidotdev/usehooks";

const images = [
  {
    label1: "Prototype image - 1",
    imgPath1: "/assets/static/images/replica/prototype-1.png",
    label2: "Prototype image - 2",
    imgPath2: "/assets/static/images/replica/prototype-2.png",
    label3: "Prototype image - 3",
    imgPath3: "/assets/static/images/replica/prototype-3.png",
    label4: "Prototype image - 4",
    imgPath4: "/assets/static/images/replica/prototype-4.png",
  },
  {
    label1: "Prototype image - 5",
    imgPath1: "/assets/static/images/replica/prototype-5.png",
    label2: "Prototype image - 6",
    imgPath2: "/assets/static/images/replica/prototype-6.png",
    label3: "Prototype image - 7",
    imgPath3: "/assets/static/images/replica/prototype-7.png",
    label4: "Prototype image - 8",
    imgPath4: "/assets/static/images/replica/prototype-8.png",
  },
];

export default function Replica() {
  const size = useWindowSize();
  return (
    <>
      <main className="relative -z-10">
        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:h-[800px] xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-[100px] xl:mt-[120px]">
            <div className="mb-3 flex basis-1/2 flex-col items-center justify-center gap-1 lg:basis-0 lg:items-start lg:gap-0">
              <div className="mb-3 w-[160px] md:w-[220px] lg:w-[300px] xl:mb-5 xl:w-[348px]">
                <Image
                  alt="Co working logo"
                  src="/assets/static/images/replica/logo.png"
                  width={159}
                  height={82}
                  layout="responsive"
                />
              </div>
              <p className="text-grey-70 m-0 mb-3 whitespace-nowrap text-center text-body-2 font-semibold md:text-body-1 lg:mb-0 lg:text-start xl:text-paragraph-2">
                An application that improves users shopping <br />
                experiences by offering alternative
              </p>
            </div>

            <motion.div
              className="m-auto w-[260px] max-w-[445px] basis-1/2 md:w-[400px] lg:m-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image
                alt="Replica application example"
                src="/assets/static/images/replica/hero-img.png"
                width={670}
                height={448}
                layout="responsive"
              />
            </motion.div>
          </div>
        </section>

        <div className="bg-white-10">
          <section
            id="overview"
            className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <div className="xl:flex xl:gap-[100px]">
              <div className="basis-7/12">
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1" className="mb-5 mt-1  xl:mt-6">
                  In some circumstance, customers may not get the exact product
                  they desired, but they can still find a solution that meets
                  their needs. Replica, the alternative recommender application
                  that helps users simply find alternative products.
                </Typography>
              </div>
              <div className="flex basis-5/12 lg:mt-8 xl:mt-0">
                <div className="me-8 md:me-10 xl:me-[100px]">
                  <Typography variant="h6">Role</Typography>
                  <ul className="mt-1 list-inside list-disc p-0 xl:mt-6">
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
                  <ul className="mt-1 list-inside list-disc p-0 xl:mt-6">
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
                        Google Form
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" className="inline-block">
                        Useberry
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <div className="bg-white-10">
          <section
            id="problem"
            className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <div>
              <Typography variant="h6">Problem</Typography>
              <Typography variant="body1" className="mt-1  xl:mt-6">
                When individuals make a decision on purchasing, various factors
                can hinder them to do so. These factors may include limited
                budget, limited retail options, and product unavailability etc.
                Instead of focusing on helping users overcome these
                uncontrollable factors, we possibly can suggest an alternative
                products that offers comparable property to the one they
                originally desired to improve their shopping experiences.
              </Typography>

              <Typography variant="body1" className="mt-3  xl:mt-6">
                After discovering problem and possible solution, I set the{" "}
                <span className="font-semibold">goal</span> of this project to
                be :{" "}
                <span className="font-semibold">
                  Improving users shopping experiences by offering alternative
                  product
                </span>
                .
              </Typography>
            </div>
          </section>
        </div>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <div className="bg-white-10">
          <section
            id="discover"
            className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography variant="subtitle1" className="text-[#FE95AB]">
              EMPATHIZE
            </Typography>
            <Typography variant="h2">
              Gathering my audiences insights and needs
            </Typography>
            <Typography variant="body1" className="mt-2  lg:mt-4 xl:mt-6">
              I started the design process by conducting a{" "}
              <span className="font-semibold">one-on-one interview</span> of 5
              people who have shopping experience. Here are some of the
              interview questions
              <ul className="ms-4 mt-1 list-disc p-0">
                <li>
                  Have you ever experienced a situation where you are unable to
                  purchase the product you want ? How did you handled it ?
                </li>
                <li>
                  If there is similar product that resembles or offers
                  comparable effectiveness as the product you initially want,
                  Would you consider to buy the alternative
                  {size?.width && size.width >= 1440 ? (
                    <>
                      <br />
                      product ? Why ?
                    </>
                  ) : (
                    " product ? Why ?"
                  )}
                </li>
                <li>
                  Do you ever try to find alternative product instead of the one
                  you originally desired ? And by which method ?
                </li>
              </ul>
            </Typography>

            <div className="m-auto mb-5 mt-2 flex flex-wrap items-center justify-center gap-2 rounded-[12px] bg-[#FFC5D1] p-5 md:mt-3 md:gap-4 md:rounded-[20px] md:py-8 lg:mt-5 xl:mb-[60px] xl:mt-6 xl:gap-8">
              <div className="min-w-[220px] max-w-[544px] xl:w-[544px]">
                <Image
                  alt="Social banner"
                  src="/assets/static/images/replica/interview-1.png"
                  width={544}
                  height={196}
                  layout="responsive"
                />
              </div>
              <div className="min-w-[180px] max-w-[413px] xl:w-[413px]">
                <Image
                  alt="Social banner"
                  src="/assets/static/images/replica/interview-2.png"
                  width={413}
                  height={196}
                  layout="responsive"
                />
              </div>
            </div>

            <Typography variant="body1" className="mt-2  xl:mt-3">
              I also conducted a survey by share it to my friends, family and
              colleagues. You can check out the entire survey{" "}
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSfzRAleNDFLS5nIPuyMloW1Vq_x_GqTj-jKIxQbQJ_2YA-mBQ/viewform?usp=pp_url"
                }
                target="_blank"
                className="text-[#FE95AB]"
              >
                here
              </Link>
              .
            </Typography>
            <Typography variant="body1" className="mt-2  xl:mt-3">
              The most important question of this survey is{" "}
              <span className="font-semibold">
                “If there is similar product that resembles or offers comparable
                effectiveness as the product you initially want, Would you
                consider to buy the alternative product ? ”
              </span>
            </Typography>

            <div className="mb-5 ms-10 mt-4 max-w-[220px] md:mt-5 md:max-w-[328px] lg:mt-5 xl:mb-6 xl:mt-6">
              <Image
                alt="Synthesize to define"
                src="/assets/static/images/replica/pie-chart.png"
                width={328}
                height={200}
                layout="responsive"
              />
            </div>

            <Typography variant="body1" className="">
              With the total of 10 responses, We can observe that 60%
              respondents are willing to buy alternative product and the other
              40% are considering to do so. The result indicates that most users
              are interested in alternative.
            </Typography>
          </section>
        </div>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <div className="bg-white-10">
          <section
            id="define"
            className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography variant="subtitle1" className="text-[#FE95AB]">
              DEFINE
            </Typography>
            <Typography variant="h2">
              Synthesize to define the problems
            </Typography>
            <Typography variant="body1" className="mt-2  lg:mt-4 xl:mt-6">
              After gathering all of the data, I synthesize it to create 2
              personas, representing Jane, a user who will definitely buy
              alternative product, and Peter, a users who is uncertain about it.
            </Typography>

            <div className="m-auto mb-5 mt-2 flex flex-wrap items-center justify-center gap-2 bg-[#FCD970] p-5 md:mb-6 md:mt-3 md:gap-4 md:py-8 lg:mt-6 lg:flex-nowrap xl:mb-[60px] xl:mt-6 xl:gap-8">
              <div className="min-w-[250px] max-w-[524px] xl:w-[524px]">
                <Image
                  alt="User Profile - 1"
                  src="/assets/static/images/replica/user-1.png"
                  width={524}
                  height={316}
                  layout="responsive"
                />
              </div>
              <div className="min-w-[250px] max-w-[524px] xl:w-[524px]">
                <Image
                  alt="User Profile - 2"
                  src="/assets/static/images/replica/user-2.png"
                  width={524}
                  height={316}
                  layout="responsive"
                />
              </div>
            </div>

            <Typography variant="h6">
              Exploring users tasks to strengthen empathy
            </Typography>
            <Typography variant="body1" className="mt-2 ">
              To have more understanding of users, I&apos;ve created user story
              that demonstrates their daily experiences which emphasized their
              actions and emotions.
            </Typography>

            <div className="m-auto mb-5 mt-2 flex flex-wrap items-center justify-center gap-2 bg-[#AAD4FC] p-5 md:mb-6 md:mt-3 md:gap-4 md:py-8 lg:mt-5 lg:flex-nowrap xl:mb-[60px] xl:mt-6 xl:gap-8">
              <div className="min-w-[250px] max-w-[463px] xl:w-[463px]">
                <Image
                  alt="User tasks - 1"
                  src="/assets/static/images/replica/user-task-1.png"
                  width={463}
                  height={360}
                  layout="responsive"
                />
              </div>
              <div className="min-w-[250px] max-w-[463px] xl:w-[463px]">
                <Image
                  alt="User tasks - 2"
                  src="/assets/static/images/replica/user-task-2.png"
                  width={463}
                  height={360}
                  layout="responsive"
                />
              </div>
            </div>

            <Typography variant="h6">Prioritizing the main problem</Typography>
            <Typography variant="body1" className="mt-2  xl:mt-6">
              During this phrase, There are several of problem statements
              derived from previously synthesized information. After listing and
              analyzing, I decided to prioritize the most common problem that
              majority of users encounter.
            </Typography>

            <div className="m-auto mb-5 mt-2 max-w-[1050px] md:mt-3 lg:mt-5  xl:mt-6">
              <Image
                alt="User problem"
                src="/assets/static/images/replica/problem.png"
                width={1050}
                height={393}
                layout="responsive"
              />
            </div>
          </section>
        </div>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <div className="bg-white-10">
          <section
            id="hero"
            className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography variant="subtitle1" className="text-[#FE95AB]">
              IDEATE
            </Typography>
            <Typography variant="h2">
              Sketching and crafting solution
            </Typography>

            <Typography variant="body1" className="mt-2  xl:mt-6">
              After brainstorming and sketching, I decided to go with an idea of{" "}
              <span className="font-semibold">
                <i>“a community-based alternative recommender application”</i>
              </span>
              &nbsp; to provide a more efficient and way for users to find
              alternative products. The application allow users to rate and
              review alternative, which would help other users make informed
              decisions. I also utilize AI as an extensive alternative finding
              feature.
            </Typography>

            <Typography variant="body1" className="mt-3  lg:mt-4 xl:mt-6">
              Here is the site map created by focusing on crucial actions and
              features.
            </Typography>

            <div className="m-auto mb-5 mt-5 scale-[1.2] xl:mb-[60px] xl:mt-6 xl:scale-[1.1]">
              <Image
                alt="application idea"
                src="/assets/static/images/replica/app-plan.png"
                width={1180}
                height={398}
                layout="responsive"
              />
            </div>

            <Typography variant="h6">Visualizing user experience</Typography>
            <Typography variant="body1" className="mt-2  xl:mb-6 xl:mt-6">
              I constructed a user flow focusing on 2 main tasks on the
              application to help me visualize users action and navigation
              through application :
              <ul className="ms-3 mt-1 list-decimal p-0 xl:mt-2">
                <li>
                  <span className="font-semibold">
                    Searching for alternative product by search feature.
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Searching for alternative product by AI feature.
                  </span>
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" className="mt-3  lg:mt-4 xl:mt-6">
              I also roughly created wireframe informed by user flow and site
              map for the purpose of organizing elements and achieving main
              tasks on the application.
            </Typography>
            <Typography variant="body1" className="mt-2  lg:mt-4 xl:mb-6">
              You can view the wireframe on{" "}
              <Link
                href="https://www.figma.com/file/pjQteQQk66ztOFxYC5ZbEV/Project-Replica?type=design&node-id=1%3A2&mode=design&t=jvslaOhcNWWub3X0-1"
                target="_blank"
                className="text-[#FE95AB]"
              >
                Figma
              </Link>
              .
            </Typography>

            <div className="m-auto mb-5 mt-2 md:mt-4 lg:mt-5 xl:mt-6">
              <Image
                alt="Organizing structure"
                src="/assets/static/images/replica/ux-visual.png"
                width={1180}
                height={686}
                layout="responsive"
              />
            </div>
          </section>
        </div>

        <div className="bg-black-80">
          <section
            id="prototype"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              <div className="self-center lg:basis-1/2 xl:basis-[62%]">
                <Typography variant="subtitle1" className="text-[#FE95AB]">
                  PROTOTYPE
                </Typography>
                <Typography variant="h2" className="text-white-10">
                  Establishing application prototype
                </Typography>
                <Typography
                  variant="body1"
                  className="mt-2  text-grey-20 lg:mt-3 xl:mt-3"
                >
                  The prototype aimed to be well-designed and easy-to-use app.
                  It has similar structure of regular shopping application,
                  establishing intuitiveness for users. Users can simply type a
                  product name to find alternative recommended buy other users
                  ,or simply have a recommendation from AI.
                </Typography>

                <Typography
                  variant="body1"
                  className="mt-3  text-grey-20 lg:mt-3 xl:mt-3"
                >
                  On the product page, users can see comprehensive reviews by
                  other users and user ratings, which represent how other users
                  perceive the alternative product. It will assist users to make
                  <br />
                  informed decision.
                </Typography>
              </div>
              <div className="mt-2 h-[80vh] lg:basis-1/2 xl:basis-[38%]">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpjQteQQk66ztOFxYC5ZbEV%2FProject-Replica%3Fpage-id%3D1%3A3%26type%3Ddesign%26node-id%3D38-1160%26viewport%3D543%2C349%2C0.31%26t%3DIxBhWMaNhWsQhzMR-1%26scaling%3Dscale-down%26mode%3Ddesign"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-black-70">
          <section
            id="workspace-design"
            className="bg-black-70 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <QuadImageCarousel images={images} />
          </section>
        </div>

        <div className="bg-black-70">
          <section
            id="lesson-learned"
            className="bg-black-70 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <Typography
              variant="body1"
              className="mb-4 mt-1 text-center text-white-10 xl:mb-7 xl:mt-7"
            >
              View the design system below or on{" "}
              <Link
                href="https://www.figma.com/file/pjQteQQk66ztOFxYC5ZbEV/Project-Replica?type=design&node-id=0%3A1&mode=design&t=jvslaOhcNWWub3X0-1"
                target="_blank"
                className="text-[#FE95AB]"
              >
                Figma
              </Link>
              .
            </Typography>

            <div className="">
              <Image
                alt="Replica Style"
                src="/assets/static/images/replica/style-component.png"
                width={1195}
                height={634}
                layout="responsive"
              />
            </div>
          </section>
        </div>

        <div className="bg-black-80">
          <section
            id="test"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-[80px] xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[100px]"
          >
            <Typography variant="subtitle1" className="text-[#FE95AB]">
              TEST
            </Typography>
            <Typography variant="h2" className="text-white-10">
              Conducting a usability testing
            </Typography>
            <Typography
              variant="body1"
              className="mb-4 mt-4 text-grey-20 xl:mb-6 xl:mt-6"
            >
              I conducted a{" "}
              <span className="font-semibold">
                remote unmoderated usability testing
              </span>{" "}
              with 4 participants on{" "}
              <span className="font-semibold">Useberry</span>, testing usability
              of 2 main features of the application :
              <ul className="ms-3 mt-1 list-decimal p-0 xl:mt-2">
                <li>
                  <span className="font-semibold">
                    Search for alternative product by search feature{" "}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Search for alternative product by AI.{" "}
                  </span>
                </li>
              </ul>
            </Typography>
            <div className="mb-10 w-[280px] md:w-[500px] lg:w-[600px] xl:mb-[60px] xl:w-[680px]">
              <Image
                alt="UseBerry Image"
                src="/assets/static/images/replica/useberry.png"
                width={159}
                height={82}
                layout="responsive"
              />
            </div>

            <Typography variant="h6" className="text-grey-20">
              Observation from session recording
            </Typography>
            <Typography
              variant="body1"
              className="mb-6  mt-2 text-grey-20 xl:mt-6"
            >
              The results show that all of users completed designated tasks
              without struggling and also on time. However after thoroughly
              observing test session recordings, I found out that{" "}
              <span className="font-semibold">
                2 out of 4 participants took some times to find search by AI
                menu on the navigation bar
              </span>
              . Here is the partial session recording from one of the
              participant.
            </Typography>

            <div className="relative aspect-[1066/600] w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1066px]">
              <iframe
                src="https://player.vimeo.com/video/875143220?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                //@ts-ignore
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                // style="position:absolute;top:0;left:0;width:100%;height:100%;"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>

            <Typography
              variant="h6"
              className="mt-10 text-grey-20 xl:mt-[60px]"
            >
              Decision on design modification
            </Typography>
            <Typography
              variant="body1"
              className="mb-4 mt-2 text-grey-20 xl:mb-6 xl:mt-6"
            >
              According to my observation, the problem possibly derives from{" "}
              <span className="font-semibold">
                lack of intuitiveness and indication of the AI menu icon.
              </span>{" "}
              Therefore, I decided to change said icon by changing it appearance
              to be more recognizable as a AI feature.
            </Typography>

            <div className="mt-2 max-w-[624px] md:mt-3  lg:mt-5 xl:mt-6">
              <Image
                alt="User problem"
                src="/assets/static/images/replica/usability-testing.png"
                width={1050}
                height={393}
                layout="responsive"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
