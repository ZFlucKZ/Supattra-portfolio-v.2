"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// MUI
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Co() {
  return (
    <>
      <main className="bg-white-10">
        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[172px]"
        >
          <div>
            <div>
              <div className="m-auto max-w-[75px]">
                <Image
                  alt="Co working logo"
                  src="/assets/static/images/co-working/logo.png"
                  width={159}
                  height={82}
                  layout="responsive"
                />
              </div>
              <p className="mb-6 text-center text-body-2 font-semibold text-black-70">
                A co-working space web <br />
                application that enhances your <br />
                collaboration and productivity
              </p>
            </div>

            <motion.div
              className="m-auto w-[80%]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
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
            </motion.div>
          </div>
        </section>

        <section
          id="overview"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div>
            <div>
              <Typography variant="h6">Overview</Typography>
              <Typography variant="body1" className="mb-5 mt-1 text-justify">
                Co. is a workspace web application designed based on idea aimed
                to improve collaboration and productivity of online co-working
                space. It composed of communication and productivity features
                that will greatly enrich work performance and collaboration
                among team members.
              </Typography>
            </div>
            <div className="flex justify-between">
              <div>
                <Typography variant="h6">Role</Typography>
                <ul className="mt-1 list-inside list-disc p-0">
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
                <ul className="mt-1 list-inside list-disc p-0">
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
          <Divider className="border-grey-50" />
        </div>

        <section
          id="problem"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <div>
            <Typography variant="h6">Problem</Typography>
            <Typography variant="body1" className="mt-1 text-justify">
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
          <Divider className="border-grey-50" />
        </div>

        <section
          id="discover"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#66B2CC]">
            DISCOVER AND EMPATHIZE
          </Typography>
          <Typography variant="h2">Exploring the current issue</Typography>
          <Typography variant="body1" className="mt-2 text-justify">
            I started a secondary research to understand characteristic of
            online co-working space by testing a number of platforms in the
            market my self and accumulating users review of each platform to
            cursorily explore user frustrations and challenges.
          </Typography>

          <div className="m-auto mb-5 mt-2">
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
          <Typography variant="body1" className="mt-2 text-justify">
            I started the primary research to empathize users by conducting user
            interview through video conferencing, targeting group of 5 users,
            ranging from 23-30 years old who have experiences in using online
            co-working space. These are some of the interview questions.
          </Typography>

          <Typography variant="subtitle2" className="mt-3">
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

          <Typography variant="body1" className="mt-2">
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
          <Divider className="border-grey-50" />
        </div>

        <section
          id="define"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        >
          <Typography variant="subtitle1" className="text-[#66B2CC]">
            DEFINE
          </Typography>
          <Typography variant="h2">Synthesize to define</Typography>
          <Typography variant="body1" className="mt-2 text-justify">
            Upon collecting the data, I synthesize the interview findings and
            transform them into an aggregated affinity diagram. This organized
            representation aids in identifying patterns and insights from the
            interview, facilitating a more comprehensive understanding of user
            needs and pain points.
          </Typography>

          <div className="m-auto mb-5 mt-2">
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
          <Typography variant="body1" className="mt-2 text-justify">
            After thoroughly synthesizing and analyzing the collected data, I
            decided to construct a problem statement. This effectively
            illustrates and clarifies the users pain points and insights,
            providing a concise and focused representation of their key
            challenges and needs. I finally identify 3 major pain points as
            followings :
          </Typography>

          <div className="m-auto mb-5 mt-2">
            <Image
              alt="Synthesize to define"
              src="/assets/static/images/co-working/pain-point.png"
              width={1238}
              height={504}
              layout="responsive"
            />
          </div>
        </section>

        <div className="px-6 md:px-10 lg:px-[60px]  xl:m-auto xl:max-w-[1440px] xl:px-[100px]">
          <Divider className="border-grey-50" />
        </div>

        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        ></section>

        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        ></section>

        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        ></section>

        <section
          id="hero"
          className="px-6 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-12 xl:m-auto xl:max-w-[1440px] xl:px-[100px] xl:py-[60px]"
        ></section>
      </main>
    </>
  );
}
