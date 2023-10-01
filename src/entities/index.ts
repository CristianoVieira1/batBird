import Bird from "@components/Bird";
import Floor from "@components/Floor";
import Obstacle from "@components/Obstacle";
import { getPipeSizePosPair } from "@utils/ramdom";
import Matter from "matter-js";
import { Dimensions } from "react-native";

const windowsHeight = Dimensions.get("window").height;
const windowsWidth = Dimensions.get("window").width;

const BOTTOM = 51;

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  engine.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowsWidth * 0.9);

  const birdConfig = {
    world,
    color: "green",
    pos: { x: 120, y: 400 },
    size: { height: 40, width: 40 },
  };

  return {
    physics: { engine, world },
    Bird: Bird(birdConfig),

    ObstacleTop1: Obstacle({
      world,
      color: "green",
      pos: pipeSizePosA.pipeTop.pos,
      size: pipeSizePosA.pipeTop.size,
      label: "ObstacleTop1",
      isTop: true,
    }),
    ObstacleBottom1: Obstacle({
      world,
      color: "green",
      pos: pipeSizePosA.pipeBottom.pos,
      size: pipeSizePosA.pipeBottom.size,
      label: "ObstacleBottom1",
      isTop: false,
    }),

    ObstacleTop2: Obstacle({
      world,
      color: "orange",
      pos: pipeSizePosB.pipeTop.pos,
      size: pipeSizePosB.pipeTop.size,
      label: "ObstacleTop2",
      isTop: true,
    }),
    ObstacleBottom2: Obstacle({
      world,
      color: "orange",
      pos: pipeSizePosB.pipeBottom.pos,
      size: pipeSizePosB.pipeBottom.size,
      label: "ObstacleBottom2",
      isTop: false,
    }),

    Floor: Floor({
      world,
      pos: { x: windowsWidth / 2, y: windowsHeight - 17 },
      size: { height: BOTTOM + 20, width: windowsWidth },
    }),
  };
};
