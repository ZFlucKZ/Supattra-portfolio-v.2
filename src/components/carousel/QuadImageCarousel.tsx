import * as React from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useWindowSize } from "@uidotdev/usehooks";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//@ts-ignore
function QuadImageCarousel({ images }) {
  const size = useWindowSize();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth:
          size.width && size.width < 1024
            ? "100vw"
            : size.width && size.width < 1440
            ? "90vw"
            : size.width && size.width < 1600
            ? "80vw"
            : "70vw",
        margin: "auto",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoPlay={false}
        className="rounded-se-[12px] rounded-ss-[12px] md:rounded-se-[24px] md:rounded-ss-[24px] xl:rounded-se-[30px] xl:rounded-ss-[30px]"
      >
        {/*@ts-ignore*/}
        {images.map((step, index) => (
          <div
            className="flex h-full gap-2 bg-grey-60 p-4 lg:gap-3 lg:p-8"
            key={index.label}
          >
            <div className="basis-1/4">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath1}
                  alt={step.label1}
                />
              ) : null}
            </div>
            <div className="basis-1/4">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath2}
                  alt={step.label2}
                />
              ) : null}
            </div>
            <div className="basis-1/4">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath3}
                  alt={step.label3}
                />
              ) : null}
            </div>
            <div className="basis-1/4">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath4}
                  alt={step.label4}
                />
              ) : null}
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        className="bg-grey-50"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className="text-white-10 disabled:text-grey-40"
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft className="" />
            ) : (
              <KeyboardArrowRight className="" />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className="text-white-10 disabled:text-grey-40"
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight className="" />
            ) : (
              <KeyboardArrowLeft className="" />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default QuadImageCarousel;
