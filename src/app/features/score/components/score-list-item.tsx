import type { ScoreType } from "@/score/score";

import {} from "@/utils/array/compareExclude";
import { Flex, Grid, Text } from "@chakra-ui/react";

type Props = {
  score: ScoreType;
};

export const ScoreListItem = ({ score }: Props) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Text
        fontFamily="gothic.MPLUS"
        fontWeight="black"
        fontSize={"md"}
        letterSpacing={1.2}
        w="120px"
      >
        {score.han}ハン{score.fu && `/${score.fu}フ`}
      </Text>

      <Grid
        flexDirection={"column"}
        templateColumns={"repeat(1, 210px)"}
        gap={1}
      >
        <Text
          fontFamily="gothic.MPLUS"
          fontWeight="black"
          fontSize={"md"}
          letterSpacing={1.2}
        >
          ツモ
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={"md"} letterSpacing={1.2}>
          自分が子: {score.score.tsumo.ko?.join(" | ") || "❌"}
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={"md"} letterSpacing={1.2}>
          自分が親: {score.score.tsumo.oya || "❌"}
        </Text>
      </Grid>

      <Grid
        flexDirection={"column"}
        templateColumns={"repeat(1, 150px)"}
        gap={1}
      >
        <Text
          fontFamily="gothic.MPLUS"
          fontWeight="black"
          fontSize={"md"}
          letterSpacing={1.2}
        >
          ロン
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={"md"} letterSpacing={1.2}>
          自分が子: {score.score.ron.ko || "❌"}
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={"md"} letterSpacing={1.2}>
          自分が親: {score.score.ron.oya || "❌"}
        </Text>
      </Grid>
    </Flex>
  );
};
