import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const AnimeSplash = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("20%")}px;
  top: ${heightPercentageToDP("6%")}px;
  z-index: 999999999999;
`;

export const Container = styled.View``;

export const Background = styled.View`
  height: ${heightPercentageToDP("100%")}px;
  width: ${widthPercentageToDP("100%")}px;
  position: absolute;
  top: ${heightPercentageToDP("-8%")}px;
`;

export const Logo = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("22%")}px;
  top: ${heightPercentageToDP("25%")}px;
  z-index: 999999999999;
`;
