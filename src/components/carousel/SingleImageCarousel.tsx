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
function SingleImageCarousel({ images }) {
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
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/*@ts-ignore*/}
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "auto",
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <MobileStepper
        className="bg-grey-60"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className="text-white-10 disabled:text-grey-50"
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
            className="text-white-10 disabled:text-grey-50"
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

export default SingleImageCarousel;
