import { useState, useCallback, FC } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/file";
import { BaseReactPlayerProps } from "react-player/base";

const Video: FC<BaseReactPlayerProps> = (props) => {
  return (
    <ResponsiveWrapper>
      {/* @ts-ignore */}
      <ReactPlayer {...props} style={{ position: "absolute", top: 0, left: 0 }} width="100%" height="100%" />
    </ResponsiveWrapper>
  );
};

const ResponsiveWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;
export default Video;
