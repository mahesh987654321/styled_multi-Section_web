import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { VideoCard, ChannelCard } from "../components";
const Videos = ({ videos }) => {
  let direction;
  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
      >
        {videos?.map((item, idx) => (
          <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
        ))}
      </Stack>
    </div>
  );
};

export default Videos;
