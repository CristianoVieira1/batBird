import Bat from "@assets/animations/bat-white.json";
import { Lottie } from "@components/Animations/Lottie";
import Matter from "matter-js";
import * as S from "./styles";

interface BirdProps {
  world?: any;
  color?: string;
  pos?: any;
  size?: any;
  body?: any;
}

const Bird = ({ body, color }: BirdProps) => {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 2;
  const yBody = body.position.y - heightBody / 2;

  const colorBird = color;

  return (
    <>
      <S.BirdImage
        color={colorBird}
        widthBody={widthBody}
        heightBody={heightBody}
        xBody={xBody}
        yBody={yBody}
      >
        <Lottie source={Bat} height={110} loop />
      </S.BirdImage>
    </>
  );
};

export default ({ world, color, pos, size }: BirdProps) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Bird" }
  );

  Matter.World.add(world, [initialBird]);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird body={initialBird} color={color} />,
  };
};
