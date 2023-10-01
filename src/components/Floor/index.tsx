import Bat from "@assets/animations/water.json";
import { Lottie } from "@components/Animations/Lottie";
import Matter from "matter-js";
import * as S from "./styles";

interface FloorProps {
  world?: any;
  color?: string;
  pos?: any;
  size?: any;
  body?: any;
}

const Floor = ({ body, color }: FloorProps) => {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 2;
  const yBody = body.position.y - heightBody / 2;

  const colorFloor = color;

  return (
    <>
      <S.FloorImage
        color={colorFloor}
        widthBody={widthBody}
        heightBody={heightBody}
        xBody={xBody}
        yBody={yBody}
      >
        <Lottie source={Bat} width={500} height={500} loop />
      </S.FloorImage>
    </>
  );
};

export default ({ world, color, pos, size }: FloorProps) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Floor", isStatic: true }
  );

  Matter.World.add(world, [initialFloor]);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor body={initialFloor} color={color} />,
  };
};
