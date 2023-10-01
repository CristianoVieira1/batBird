import styled from "styled-components/native";

interface BirdImageProps {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
  color?: string;
}

export const BirdImage = styled.View<BirdImageProps>`
  position: absolute;
  left: ${(props) => props.xBody}px;
  top: ${(props) => props.yBody}px;
  width: ${(props) => props.widthBody}px;
  height: ${(props) => props.heightBody}px;
  resize-mode: contain;
`;
