import Play from "@assets/animations/play.json";
import { Lottie } from "@components/Animations/Lottie";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

interface StartProps {
  onPress: () => void;
}

const Start = ({ onPress }: StartProps) => {
  return (
    <S.Play animation={"bounceInUp"} useNativeDriver duration={1000}>
      <TouchableOpacity onPress={onPress}>
        <Lottie source={Play} width={200} height={200} />
      </TouchableOpacity>
    </S.Play>
  );
};

export default Start;
