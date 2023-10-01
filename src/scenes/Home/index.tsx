import SplashImage from "@assets/animations/background-gamePlay.json";
import Water from "@assets/animations/water.json";

import { Lottie } from "@components/Animations/Lottie";
import { Game } from "@scenes/Game";
import { StatusBar } from "expo-status-bar";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <StatusBar translucent style="light" />
      <S.Background>
        <Lottie source={SplashImage} height={950} loop />
      </S.Background>

      <Game />

      <S.WaterBackground>
        <Lottie source={Water} width={300} height={300} loop />
      </S.WaterBackground>
    </>
  );
};

export default Home;
