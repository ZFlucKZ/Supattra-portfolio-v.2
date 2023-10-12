"use client";

import * as React from "react";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

// useHooks
import { useWindowSize } from "@uidotdev/usehooks";

// Framer motion
import { motion, Variants } from "framer-motion";

const caseStudyVariant: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function CaseStudyCard({
  title,
  subtitle,
  image,
}: CaseStudyCardTypes) {
  const size = useWindowSize();

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
      variants={caseStudyVariant}
    >
      <Card className="relative flex items-center shadow-[4px_4px_16px_0_rgba(186,186,186,0.6)] transition-all duration-[400] hover:-translate-y-1 hover:scale-[1.01]">
        <CardMedia
          component="img"
          sx={{
            width:
              size.width && size.width < 744
                ? 144
                : size.width && size.width < 744
                ? 332
                : size.width && size.width < 1024
                ? 452
                : 620,
          }}
          image={`${image}${
            size.width && size.width < 744
              ? ""
              : size.width && size.width < 744
              ? "-md"
              : size.width && size.width < 1024
              ? "-lg"
              : "-xl"
          }.png`}
          alt={`${title} Application image`}
          loading="eager"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h6" className="text-black-80 md:mb-3">
              {title}
            </Typography>
            <Typography variant="body2" className="text-grey-60">
              {subtitle}
            </Typography>
          </CardContent>
        </Box>
        <ArrowForwardRoundedIcon className="absolute bottom-4 right-4 h-5 w-5 md:h-7 md:w-7 lg:bottom-8 lg:right-8 lg:h-9 lg:w-9 xl:bottom-[60px] xl:right-[60px] xl:h-12 xl:w-12" />
      </Card>
    </motion.div>
  );
}
