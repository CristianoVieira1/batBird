import styled from "styled-components/native";

interface ObstacleImageProps {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
  color?: string;
}

export const ObstacleImage = styled.Image<ObstacleImageProps>`
  position: absolute;
  left: ${(props) => props.xBody}px;
  top: ${(props) => props.yBody}px;
  width: ${(props) => props.widthBody}px;
  height: ${(props) => props.heightBody}px;
  resize-mode: cover;
`;
