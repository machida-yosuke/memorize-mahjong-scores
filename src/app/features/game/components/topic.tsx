import { Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { topicTextAtom } from "../store/topicTextState";

export const Topic = () => {
  const topicText = useAtomValue(topicTextAtom);

  return (
    <Text
      fontSize={{ sp: "sm", tb: "md", pc: "x-large" }}
      fontFamily="gothic.MPLUS"
      fontWeight="black"
      wordBreak={"break-all"}
    >
      お題:{" "}
      {topicText === "" ? "ブレストするお題を入力してください。" : topicText}
    </Text>
  );
};
