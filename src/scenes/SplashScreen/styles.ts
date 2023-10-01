import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const AnimeSplash = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("4%")}px;
  top: ${heightPercentageToDP("10%")}px;
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
  top: ${heightPercentageToDP("35%")}px;
  z-index: 999999999999;
`;

export const Loading = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("50%")}px;
  top: ${heightPercentageToDP("85%")}px;
  z-index: 999999999999;
`;
