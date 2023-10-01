import PipeGreenInverted from "@assets/images/pipe-green-inverted.png";
import PipeGreen from "@assets/images/pipe-green.png";
import PipeOrangeInverted from "@assets/images/pipe-orange-inverted.png";
import PipeOrange from "@assets/images/pipe-orange.png";

import Matter from "matter-js";
import * as S from "./styles";

interface ObstacleProps {
  world?: any;
  color?: string;
  pos?: any;
  size?: any;
  label?: string;
  isTop?: boolean;
  body?: any;
}

const Obstacle = ({ body, color }: ObstacleProps) => {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 3;
  const yBody = body.position.y - heightBody / 3;

  const colorObstacle = color;

  return (
    <>
      <S.ObstacleImage
        source={
          color === "green"
            ? !body.isTop
              ? PipeGreenInverted
              : PipeGreen
            : !body.isTop
            ? PipeOrange
            : PipeOrangeInverted
        }
        color={colorObstacle}
        widthBody={widthBody}
        heightBody={heightBody}
        xBody={xBody}
        yBody={yBody}
      />
    </>
  );
};

export default ({
  world,
  color,
  pos,
  size,
  label,
  isTop = false,
}: ObstacleProps) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label, isStatic: true }
  );

  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    color,
    pos,
    isTop,
    renderer: <Obstacle body={initialObstacle} color={color} />,
  };
};
