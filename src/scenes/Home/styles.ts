import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import styled from "styled-components/native";

export const Background = styled.View`
  height: ${heightPercentageToDP("100%")}px;
  width: ${widthPercentageToDP("100%")}px;
  position: absolute;
  top: ${heightPercentageToDP("-8%")}px;
`;

export const WaterBackground = styled.View`
  width: ${widthPercentageToDP("100%")}px;
  position: absolute;
  top: ${heightPercentageToDP("64%")}px;
  z-index: 2;
`;
