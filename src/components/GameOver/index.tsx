import React, { useEffect } from "react";

import GAME_OVER from "@assets/animations/game-over.json";

import { Lottie } from "@components/Animations/Lottie";
import * as S from "./styles";

interface GameOverProps {
  onPress: () => void;
}

const GameOver = ({ onPress }: GameOverProps) => {
  useEffect(() => {
    setTimeout(() => {
      onPress();
    }, 4000);
  }, []);

  return (
    <S.Container>
      <Lottie source={GAME_OVER} width={200} height={200} />
    </S.Container>
  );
};

export { GameOver };
