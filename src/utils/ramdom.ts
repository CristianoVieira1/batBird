import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface PipeProps {
  min: number;
  max: number;
}

export const getRandom = ({ min, max }: PipeProps) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom({ min: 220, max: windowHeight - 900 });

  const pipeTop = {
    pos: { x: windowWidth + addToPosX, y: yPosTop },
    size: { height: 600, width: 55 },
  };
  const pipeBottom = {
    pos: { x: windowWidth + addToPosX, y: windowHeight - 100 + yPosTop },
    size: { height: 600, width: 55 },
  };

  return { pipeTop, pipeBottom };
};
