import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Play = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("30%")}px;
  top: ${heightPercentageToDP("36%")}px;
  z-index: 999999999999;
`;
