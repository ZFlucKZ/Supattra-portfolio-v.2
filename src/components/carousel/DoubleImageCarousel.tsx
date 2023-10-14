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
function DoubleImageCarousel({ images }) {
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
        maxWidth: size.width && size.width < 1440 ? "80vw" : "55vw",
        margin: "auto",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoPlay={false}
        className="rounded-se-[30px] rounded-ss-[30px]"
      >
        {/*@ts-ignore*/}
        {images.map((step, index) => (
          <div className="flex gap-2 bg-grey-60 p-4" key={index.label}>
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: `${index == 3 ? "50%" : "100%"}`,
                  }}
                  src={step.imgPath1}
                  alt={step.label1}
                />
              ) : null}
            </div>
            <div>
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

export default DoubleImageCarousel;
