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

const images = [
  {
    label1: "Prototype image - 1",
    imgPath1: "/assets/static/images/warmlight/prototype-1.png",
    label2: "Prototype image - 2",
    imgPath2: "/assets/static/images/warmlight/prototype-2.png",
    label3: "Prototype image - 3",
    imgPath3: "/assets/static/images/warmlight/prototype-3.png",
    label4: "Prototype image - 4",
    imgPath4: "/assets/static/images/warmlight/prototype-4.png",
  },
  {
    label1: "Prototype image - 5",
    imgPath1: "/assets/static/images/warmlight/prototype-5.png",
    label2: "Prototype image - 6",
    imgPath2: "/assets/static/images/warmlight/prototype-6.png",
    label3: "Prototype image - 7",
    imgPath3: "/assets/static/images/warmlight/prototype-7.png",
    label4: "Prototype image - 8",
    imgPath4: "/assets/static/images/warmlight/prototype-8.png",
  },
  {
    label1: "Prototype image - 9",
    imgPath1: "/assets/static/images/warmlight/prototype-9.png",
    label2: "Prototype image - 10",
    imgPath2: "/assets/static/images/warmlight/prototype-10.png",
    label3: "Prototype image - 11",
    imgPath3: "/assets/static/images/warmlight/prototype-11.png",
    label4: "Prototype image - 12",
    imgPath4: "/assets/static/images/warmlight/prototype-12.png",
  },
  {
    label1: "Prototype image - 13",
    imgPath1: "/assets/static/images/warmlight/prototype-13.png",
    label2: "Prototype image - 14",
    imgPath2: "/assets/static/images/warmlight/prototype-14.png",
    label3: "Prototype image - 15",
    imgPath3: "/assets/static/images/warmlight/prototype-15.png",
    label4: "Prototype image - 16",
    imgPath4: "/assets/static/images/warmlight/prototype-16.png",
  },
];

export default function Warmlight() {
  return (
    <>
      <main className="relative -z-10 bg-white-10">
        <div className="bg-black-80">
          <section
            id="hero"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:h-[800px] xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-[100px] xl:mt-[120px]">
              <div className="mb-3 flex basis-1/2 flex-col items-center justify-center gap-1 lg:basis-0 lg:items-start lg:gap-0">
                <div className="w-[160px] md:w-[220px] lg:w-[300px] xl:w-[362px]">
                  <Image
                    alt="Co working logo"
                    src="/assets/static/images/warmlight/logo.png"
                    width={159}
                    height={82}
                    layout="responsive"
                  />
                </div>
                <p className="m-0 mb-3 whitespace-nowrap text-center text-body-2 font-medium text-grey-20 md:text-body-1 lg:mb-0 lg:text-start xl:text-paragraph-2">
                  A scented candle shopping application that helps users
                  <br />
                  buy products effortlessly
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
                  alt="Co working application example"
                  src="/assets/static/images/warmlight/hero-img.png"
                  width={670}
                  height={448}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </section>
        </div>

        <section
          id="overview"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div className="xl:flex xl:gap-[100px]">
            <div className="basis-7/12">
              <Typography variant="h6">Overview</Typography>
              <Typography variant="body1" className="mb-5 mt-1  xl:mt-6">
                Warmlight is a mobile shopping application for scented candle
                buyers. The application aids users to find their most suitable
                scent through features that alleviate said obstacle by giving
                comprehensive information and similitude image to help users
                figure any actual scent, and also offer users to customize
                candles upon their own preference
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
                      Interface Design
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
          <div className="lg:flex lg:gap-[60px]">
            <div className="lg:basis-1/2 xl:basis-[42%]">
              <Typography variant="h6">Problem</Typography>
              <Typography variant="body1" className="mt-1  xl:mt-6">
                Warmlight is a scented candle business who faces declining in
                product sales. As the current limitations and challenges faced
                by customers when purchasing scented candles, such as time
                management and lack of scent information, contributing to user’s
                exhaustion, expense and time which hinder the overall user
                experience and limit the potential growth of the business.
              </Typography>
            </div>

            <div className="lg:basis-1/2 xl:basis-[58%]">
              <Typography variant="h6" className="mt-5 lg:mt-0">
                Possible Solution
              </Typography>
              <Typography variant="body1" className="mt-1 xl:mt-6">
                <ul className="ms-3 mt-1 list-decimal p-0 xl:mt-2">
                  <li>
                    <span className="font-semibold">Online Platform</span> :
                    Create platform that allow user to buy scented remotely
                    without commuting and wasting time.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Comprehensive Scent Information
                    </span>{" "}
                    : Provide detailed and accurate descriptions of each scent,
                    including fragrance notes, mood and used occasion.
                  </li>
                  <li>
                    <span className="font-semibold">Personalization</span> :
                    Implement scented candles personalization to offer products
                    that match customers preference.
                  </li>
                </ul>
              </Typography>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="discover"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#DB700B]">
            EMPATHIZE
          </Typography>
          <Typography variant="h2">Gathering needs and insights</Typography>
          <Typography variant="body1" className="mt-2  xl:mt-6">
            I started the empathize process by planning user interview targeting
            group of 5 users who have ever bought scented candles. These are the
            interview question that aimed to find factors contribute to or
            hinder scented candle purchasing of users.
          </Typography>

          <Typography variant="subtitle2" className="mt-4 lg:mt-6">
            Goal : To understand which factors contribute to or hinder scented
            candle purchasing of users
          </Typography>

          <ul className="ms-4 mt-2 list-disc p-0 xl:mt-6">
            <li>
              Have you ever bought scented candle ? What motivates you to do so
              ?
            </li>
            <li>Which channel do you buy scented candle from ? Why ?</li>
            <li>
              Have you ever experienced frustration from buying scented candle ?
              How did you handle it?
            </li>
            <li>
              Have you ever bought scented candle online ? How do you like or
              dislike it ?
            </li>
            <li>
              Do you think buying scented candle online better or worse than
              local store ? Why ?
            </li>
          </ul>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-40" />
        </div>

        <section
          id="define"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#DB700B]">
            DEFINE
          </Typography>
          <Typography variant="h2">What are the problems ?</Typography>
          <Typography variant="body1" className="mt-2  lg:mt-4 xl:mt-6">
            After the interview, I am able to categorize customers into 2
            personas which are Linda, a regular customer, and Scott, a casual
            customer. We can see that regular customers concern about product
            details and tend to elaborately shopping for product, while casual
            customers concern about shopping for product at discounted price and
            promotion.
          </Typography>

          <div className="m-auto mb-5 mt-2 flex flex-wrap items-center justify-center gap-2 bg-grey-40 p-5 md:mb-6 md:mt-3 md:gap-4 md:py-8 lg:mt-6 lg:flex-nowrap xl:mt-6 xl:gap-8 ">
            <div className="min-w-[250px] max-w-[561px] md:w-[400px] lg:w-[500px] xl:w-[561px]">
              <Image
                alt="User Profile - 1"
                src="/assets/static/images/warmlight/user-1.png"
                width={561}
                height={330}
                layout="responsive"
              />
            </div>
            <div className="min-w-[250px] max-w-[561px] md:w-[400px] lg:w-[500px] xl:w-[561px]">
              <Image
                alt="User Profile - 2"
                src="/assets/static/images/warmlight/user-2.png"
                width={561}
                height={330}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden bg-black-80">
          <section
            id="hero"
            className=" bg-black-80 px-6 py-[60px] md:px-10 md:py-[80px] lg:px-[60px] lg:py-[100px] xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[120px]"
          >
            <Typography
              variant="h2"
              className="relative z-50 text-center text-white-10"
            >
              “ How might we design a better shopping experience for users to
              purchase more of our product ? ”
            </Typography>

            <div className="pointer-events-none absolute left-0 top-1/4 h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 bg-[#DB700B] opacity-[0.15] blur-3xl"></div>
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-[20vw] w-[20vw] -translate-y-1/2 bg-[#DB700B] opacity-[0.15] blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[10vw] w-[10vw] translate-x-1/2 bg-[#fff] opacity-[0.12] blur-2xl"></div>
          </section>
        </div>

        <section
          id="hero"
          className="px-6 pt-10 md:px-10 md:pt-[60px] lg:px-[60px] lg:pt-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:pt-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#DB700B]">
            IDEATE
          </Typography>

          <Typography variant="h2">Sketching and crafting solution</Typography>

          <Typography variant="body1" className="mt-2  xl:mb-7 xl:mt-6">
            According to gathered insight and synthesized data, this{" "}
            <span className="font-semibold">information architecture</span>{" "}
            focuses on main pages of the application and key tasks of customers
            :{" "}
            <span className="font-semibold">
              1. Buying products 2. Customizing products
            </span>{" "}
          </Typography>

          <div className="m-auto mb-4 mt-5 lg:mb-5 xl:mb-[60px] xl:mt-[60px]">
            <Image
              alt="application idea"
              src="/assets/static/images/warmlight/organize-structure.png"
              width={1180}
              height={398}
              layout="responsive"
            />
          </div>

          <Typography variant="h6">Organizing contents and elements</Typography>

          <Typography variant="body1" className="mt-2  xl:mb-7 xl:mt-6">
            I created wireframe informed by information architecture to
            illustrate main key task and contents of the application. You can
            view full wireframe on{" "}
            <Link
              href="https://www.figma.com/file/DqfXfKcQnFEjkYpQm4d5c7/Warmlight-Project?type=design&node-id=37%3A2&mode=design&t=yxXq1GOrjVKUV3UP-1"
              target="_blank"
              className="text-[#DB710C]"
            >
              Figma
            </Link>
            .
          </Typography>
        </section>

        <div className="m-auto mb-10 mt-2 md:mb-[60px] md:mt-4 lg:mb-[80px] lg:mt-5 xl:mb-[100px] xl:mt-6">
          <Image
            alt="Organizing structure"
            src="/assets/static/images/warmlight/application-banner.png"
            width={1180}
            height={686}
            layout="responsive"
          />
        </div>

        <div className="bg-black-80">
          <section
            id="prototype"
            className="bg-black-80 px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              <div className="self-center lg:basis-1/2">
                <Typography variant="subtitle1" className="text-[#DB700B]">
                  PROTOTYPE
                </Typography>
                <Typography variant="h2" className="text-white-10">
                  Hi-fidelity Prototype
                </Typography>
                <Typography
                  variant="body1"
                  className="mt-2  text-grey-20 lg:mt-3 xl:mt-6"
                >
                  In high-fidelity prototype of the application, I crafted a
                  user experience that seamlessly guides customers through their
                  shopping journey. From consistent visual, warm and dark tone
                  embodying brand identity, to foster trust and brand
                  recognition to an intuitive navigation system that simplifies
                  product discovery which prioritizes user needs and
                  preferences.
                </Typography>
              </div>
              <div className="mt-2 h-[80vh] lg:basis-1/2">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDqfXfKcQnFEjkYpQm4d5c7%2FWarmlight-Project%3Fpage-id%3D37%253A3%26type%3Ddesign%26node-id%3D142-1016%26viewport%3D715%252C622%252C0.13%26t%3DdvvHaZ2zLjIVnuKS-1%26scaling%3Dscale-down%26starting-point-node-id%3D216%253A2066%26mode%3Ddesign"
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

        <div className="bg-black-80">
          <section
            id="lesson-learned"
            className="bg-black-80 px-6 py-[60px] md:px-10 md:py-[80px] lg:px-[60px] lg:py-[120px] xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[160px]"
          >
            <div className="flex items-center gap-14">
              <div className="lg:basis-2/3">
                <Typography variant="h2" className="text-white-10">
                  Lesson Learned
                </Typography>
                <ul className="ms-4 mt-3 list-decimal p-0  text-grey-20 lg:mt-5 xl:mt-6">
                  <li className="mb-2 lg:mb-4 xl:mb-6">
                    Machine learning personalized recommendations : After
                    finishing the case study and researching further, I found
                    out that utilizing machine learning algorithms to provide
                    personalized product recommendations based on user behavior
                    and preferences is an opportunity to improve the
                    application. It also can significantly increases user
                    satisfaction and boosting sales.
                  </li>
                  <li className="mb-2 lg:mb-4 xl:mb-6">
                    Visual Consistency : Maintaining a consistent visual style
                    throughout the app, from colors and typography to icons and
                    imagery, helped build trust with users. The significance of
                    brand consistency fosters a cohesive and professional user
                    experience.
                  </li>
                  <li>
                    User Feedback : Establishing user feedback mechanism within
                    the app, along with regular usability testing, allowed for
                    continuous refinement of the UX/UI. It’s importance to
                    incorporate user feedback into the design process to enhance
                    the application usability and effectiveness.
                  </li>
                </ul>
              </div>
              <div className="hidden max-w-[412px] basis-1/3 lg:block">
                <Image
                  alt="Lesson learned"
                  src="/assets/static/images/warmlight/lesson-learned.png"
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
