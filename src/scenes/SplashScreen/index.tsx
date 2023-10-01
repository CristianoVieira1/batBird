import React, { useEffect } from "react";

import SplashImage from "@assets/animations/background.json";
import Splash from "@assets/animations/bat.json";
import Logo from "@assets/icons/logo.svg";
import { Lottie } from "@components/Animations/Lottie";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Load } from "../../components/Animations/Load";
import * as S from "./styles";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        handleNextRoute();
      }, 4500);
    }, 1700);
  }, []);

  async function handleNextRoute() {
    navigation.navigate("InitialAccess");
    return;
  }

  return (
    <>
      <StatusBar translucent style="light" />

      <S.Background>
        <Lottie source={SplashImage} height={950} />
      </S.Background>

      <S.Container>
        <S.AnimeSplash animation={"bounceInUp"} useNativeDriver duration={5000}>
          <Lottie source={Splash} width={300} height={300} />
        </S.AnimeSplash>

        <S.Logo animation={"bounceInUp"} useNativeDriver duration={8500}>
          <Logo width={250} height={250} />
        </S.Logo>

        <S.Loading animation={"bounceInUp"} useNativeDriver duration={9500}>
          <Load />
        </S.Loading>
      </S.Container>
    </>
  );
};

export default SplashScreen;
