import styled from "styled-components/native";

interface FloorImageProps {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
  color?: string;
}

export const FloorImage = styled.View<FloorImageProps>`
  position: absolute;
  left: ${(props) => props.xBody}px;
  top: ${(props) => props.yBody}px;
  width: ${(props) => props.widthBody}px;
  height: ${(props) => props.heightBody}px;
  background-color: ${(props) => props.color};
  z-index: 999999;
`;
