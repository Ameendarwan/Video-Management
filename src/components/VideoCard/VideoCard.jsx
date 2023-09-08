import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { More } from "iconsax-react";
import videoImage from "assets/video-image.svg";

const VideoCard = ({
  isHovered,
  hoverBgColor,
  hoverContentColor,
  title,
  createdAt,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "1.8rem",
        backgroundColor: isHovered ? hoverBgColor : "#ffffff",
        pt: 0.2,
        px: 0.2,
        pb: 1,
      }}
    >
      <Box
        component="img"
        src={videoImage}
        alt="video"
        sx={{
          width: "100%",
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={1.5}
      >
        <Stack py={1}>
          <Typography
            variant="subtitle1"
            sx={{
              color: isHovered ? hoverContentColor : "inherit",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: isHovered ? hoverContentColor : "#747474",
            }}
          >
            Created at: {createdAt}
          </Typography>
        </Stack>
        <More
          size={20}
          color={isHovered ? hoverContentColor : "#222222"}
          variant="Outline"
          cursor="pointer"
        />
      </Stack>
    </Box>
  );
};

export default VideoCard;
