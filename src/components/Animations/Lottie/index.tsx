import LottieView, { AnimatedLottieViewProps } from "lottie-react-native";
import React from "react";

interface ILottieProps extends AnimatedLottieViewProps {
  width?: number;
  height?: number;
}

export function Lottie({ ...rest }: ILottieProps) {
  const { width = 200 } = rest;
  const { height = 200 } = rest;
  return (
    <LottieView
      style={{
        width: width,
        height: height,
        alignSelf: "center",
        marginTop: 20,
      }}
      autoPlay
      autoSize
      resizeMode="cover"
      {...rest}
    />
  );
}
