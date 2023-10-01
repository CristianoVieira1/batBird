import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

import { GameOver } from "@components/GameOver";
import Start from "@components/Start";
import { Physics } from "@utils/physics";
import entities from "../../entities";

const Game = () => {
  const [running, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const gameEngineRef = useRef(null);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  const handleBackToStart = () => {
    setIsRunning(false);
    setIsGameOver(false);
  };

  const handleOnStart = () => {
    setIsRunning(true);
    setIsGameOver(false);
  };

  const handleOnGameOver = () => {
    setIsRunning(false);
    setIsGameOver(true);
  };

  const handleOnEvent = (event: any) => {
    switch (event.type) {
      case "game_over":
        handleOnGameOver();
        break;
    }
  };
  if (!running && !isGameOver) {
    return <Start onPress={handleOnStart} />;
  }

  if (!running && isGameOver) {
    return <GameOver onPress={handleBackToStart} />;
  }

  return (
    <S.Container
      systems={[Physics]}
      onEvent={handleOnEvent}
      ref={gameEngineRef}
      running={running}
      entities={entities()}
    />
  );
};

export { Game };
