"use client";

import * as React from "react";

// MUI
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

// @ts-ignore
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(
  function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null as any, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null as any, true);
        }
      },
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
    );
  },
);

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ResumeModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        className="rounded-none px-4 py-2 md:me-4 md:px-5 md:py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5"
        onClick={handleOpen}
      >
        <Typography variant="subtitle1">RESUME</Typography>
      </Button>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="relative">
              <div className="absolute right-[2px] top-[2px] flex h-14 w-14 items-center justify-center bg-black-80">
                <ClearRoundedIcon
                  className=" h-9 w-9 cursor-pointer text-white-10"
                  onClick={handleClose}
                />
              </div>
              <iframe
                src="https://drive.google.com/file/d/1P9ChPOBK2hl5_gkUffR-iZJYEbSISjqu/preview"
                className="h-[80vh] w-[80vw]"
              ></iframe>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
