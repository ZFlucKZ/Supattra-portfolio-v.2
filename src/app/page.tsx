"use client";

// React toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// MUI
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

// Components
import CaseStudyCard from "@/components/card/CaseStudyCard";

// Next
import Link from "next/link";
import Image from "next/image";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// React Query
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// React loading
import ReactLoading from "react-loading";

// useHooks
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home() {
  const size = useWindowSize();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSuccessSendEmail = (data: any) => {
    if (data.data.status == true) {
      reset();
      let message = data.data.message;

      // toast.success(message, {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else {
      let message = data.data.message;

      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onErrorSendEmail = (error: any) => {
    let message = error?.response?.data
      ? error?.response?.data
      : "Something went wrong";
  };

  const { mutateAsync: submitSendEmail, isLoading: isLoadingSubmitSendEmail } =
    useMutation(
      (data) => {
        return axios.post("http://localhost:3000/api/send-email", data);
        // return axios.post(
        //   "https://supattra-portfolio.vercel.app/api/send-email",
        //   data,
        // );
      },
      {
        onSuccess: onSuccessSendEmail,
        onError: onErrorSendEmail,
      },
    );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Send email successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // @ts-ignore
    submitSendEmail(data);
  };

  return (
    <>
      <main className="bg-white-10 xl:m-auto xl:max-w-[1440px]">
        <section
          id="hero"
          className="px-6 py-14 md:px-10 md:py-[100px] lg:px-[60px] lg:py-[120px] xl:px-[100px] xl:py-[196px]"
        >
          <div>
            {size.width && size.width < 744 ? (
              <Typography
                variant="h1"
                className="mb-2 text-center text-black-80"
              >
                Hi, I’m Supattra, <br />a UX/UI designer base in Thailand
              </Typography>
            ) : (
              <Typography
                variant="h1"
                className="mb-2 text-black-80 lg:mb-4 xl:mb-5"
              >
                Hi, I’m Supattra Chansawad, <br />a UX/UI designer base in
                Thailand
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              className="mb-5 text-center text-black-70 md:mb-4 md:text-start lg:mb-8 xl:mb-10"
            >
              “ I am a UX/UI designer with a passion for solving complex
              problems and improving human experiences. I am eager to contribute
              my skills to your team. ”
            </Typography>
            <div className="flex justify-center md:justify-start">
              <Link href="#case-study">
                <Button
                  variant="contained"
                  size="large"
                  className="me-6 rounded-none md:me-4 lg:px-5 lg:py-4"
                >
                  <Typography variant="subtitle1">CASE STUDY</Typography>
                </Button>
              </Link>
              <Button
                variant="outlined"
                size="large"
                className="rounded-none lg:px-5 lg:py-4"
              >
                <Typography variant="subtitle1">RESUME</Typography>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="case-study"
          className="px-6 pb-10 md:px-10 md:pb-[60px] lg:px-[60px] lg:pb-12 xl:px-[100px] xl:pb-[60px]"
        >
          <div className="flex flex-col gap-5 md:gap-6">
            <Link href="/replica" className="no-underline">
              <CaseStudyCard
                title={"Replica"}
                subtitle={
                  "An application that improves shopping experiences by offering alternatives."
                }
                image={"/assets/static/images/homepage/replica"}
              />
            </Link>
            <Link href="/co-working" className="no-underline">
              <CaseStudyCard
                title={"Co."}
                subtitle={
                  "An online workspace web application that enhance your collaboration and productivity"
                }
                image={"/assets/static/images/homepage/co"}
              />
            </Link>
            <Link href="/warmlight" className="no-underline">
              <CaseStudyCard
                title={"Warmlight"}
                subtitle={
                  "A scented candle shopping application that helps users buy product effortlessly"
                }
                image={"/assets/static/images/homepage/warmlight"}
              />
            </Link>
          </div>
        </section>

        <section
          id="contact"
          className="md:py bg-grey-20 px-6 py-10 md:px-10 md:py-8 lg:px-[60px] lg:pb-12 xl:px-[100px] xl:pb-[60px]"
        >
          <Divider className="border-grey-50" />
          <Typography variant="h4" className="my-2 text-black-80 lg:my-4">
            Contact
          </Typography>
          <Divider className="mb-5 border-grey-50 md:mb-6 lg:mb-8 xl:mb-10" />
          <div className="flex gap-6 xl:gap-[88px]">
            <div className="basis-1/2">
              <Typography
                variant="body2"
                className="mb-3 text-black-70 md:mb-4 xl:text-body-1"
              >
                If you would like to know more or discuss a project with me, you
                can reach out via :
              </Typography>
              <Typography variant="h5" className="mb-1 text-black-70">
                Email
              </Typography>
              <Typography
                variant="body2"
                className="mb-3 text-black-70 xl:text-body-1"
              >
                supattra.chansawad@gmail.com
              </Typography>
              <div className="mb-4">
                <div className="me-2 inline-block min-w-[28px] md:me-4 lg:min-w-[40px]">
                  <Link
                    href="https://www.linkedin.com/in/supattra-chansawad/"
                    target="_blank"
                  >
                    <Image
                      alt="Supattra Chansawad - Linkedin"
                      src="/assets/static/images/homepage/linkedin.png"
                      width={28}
                      height={28}
                      layout="responsive"
                      className=" transition-all duration-[400] hover:opacity-80 "
                    />
                  </Link>
                </div>
                <div className="inline-block min-w-[28px] lg:min-w-[40px]">
                  <Link
                    href="https://www.behance.net/supattrchansaw"
                    target="_blank"
                  >
                    <Image
                      alt="Supattra Chansawad - Behance"
                      src="/assets/static/images/homepage/behance.png"
                      width={28}
                      height={28}
                      layout="responsive"
                      className="transition-all duration-[400] hover:opacity-80"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex basis-1/2 flex-col"
            >
              <TextField
                id="name"
                label="Name"
                {...register("name")}
                className="mb-3 md:mb-4"
                size={size.width && size.width < 1440 ? "small" : "large"}
              />

              <div className="mb-3 md:mb-4">
                <TextField
                  id="email"
                  label="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                  size={size.width && size.width < 1440 ? "small" : "large"}
                  className="w-full"
                />
                {errors?.email?.type === "required" && (
                  <p
                    className="mb-0 mt-1 text-body-2"
                    style={{ color: "#f44336" }}
                  >
                    This field is required.
                  </p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p
                    className="mb-0 mt-1 text-body-2"
                    style={{ color: "#f44336" }}
                  >
                    Please enter a valid email.
                  </p>
                )}
              </div>

              <div className="mb-3 w-full md:mb-4">
                <TextField
                  id="message"
                  label="Message"
                  {...register("message", {
                    required: true,
                  })}
                  multiline
                  rows={4}
                  className="w-full"
                />
                {errors?.message?.type === "required" && (
                  <p
                    className="mb-0 mt-1 text-body-2"
                    style={{ color: "#f44336" }}
                  >
                    This field is required.
                  </p>
                )}
              </div>

              <Button
                variant={isLoadingSubmitSendEmail ? "contained" : "contained"}
                disabled={isLoadingSubmitSendEmail}
                className="rounded-none text-body-2 font-normal lg:py-4"
                type="submit"
                size="large"
              >
                {isLoadingSubmitSendEmail ? (
                  <>
                    <ReactLoading
                      type={"spinningBubbles"}
                      color="#A0A0A0"
                      height={22}
                      width={22}
                    />
                  </>
                ) : (
                  <Typography variant="subtitle1">SEND MESSAGE</Typography>
                )}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
