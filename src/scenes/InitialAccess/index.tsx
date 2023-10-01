import SplashImage from "@assets/animations/background-game.json";
import Splash from "@assets/animations/bat.json";
import { useState } from "react";

import Logo from "@assets/icons/logo.svg";
import { Lottie } from "@components/Animations/Lottie";
import Start from "@components/Start";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as S from "./styles";

const InitialAccess: React.FC = () => {
  const navigation = useNavigation();
  const [running, setRunning] = useState(false);

  const handleOnStartGame = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <StatusBar translucent style="light" />

      <S.Background>
        <Lottie source={SplashImage} height={950} />
      </S.Background>

      <S.Container>
        <S.AnimeSplash animation={"bounceInUp"} useNativeDriver duration={5000}>
          <Lottie source={Splash} width={200} height={200} />
        </S.AnimeSplash>

        <S.Logo animation={"bounceInUp"} useNativeDriver duration={8500}>
          <Logo width={250} height={250} />
        </S.Logo>

        <Start onPress={() => handleOnStartGame()} />
      </S.Container>
    </>
  );
};

export default InitialAccess;
