import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading..'

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      alignItems="start"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
