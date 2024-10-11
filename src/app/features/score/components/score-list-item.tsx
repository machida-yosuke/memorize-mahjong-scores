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
        fontSize={{sp:'xx-small', tb:"md"}}
        letterSpacing={1.2}
        w={{sp:"90px", tb:"120px"}}
      >
        {score.han}ハン{score.fu && `/${score.fu}フ`}
      </Text>

      <Grid
        flexDirection={"column"}
        templateColumns={{sp:"100px", tb:"repeat(1, 210px)"}}
        gap={1}
      >
        <Text
          fontFamily="gothic.MPLUS"
          fontWeight="black"
          fontSize={{sp:'xx-small', tb:"md"}}
          letterSpacing={1.2}
        >
          ツモ
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={{sp:'xx-small', tb:"md"}} letterSpacing={1.2}>
          自分が子:{" "}
          {score.score.tsumo.self_ko.ko
            ? `${score.score.tsumo.self_ko.ko}/${score.score.tsumo.self_ko.oya}`
            : "❌"}
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={{sp:'xx-small', tb:"md"}} letterSpacing={1.2}>
          自分が親:{" "}
          {score.score.tsumo.self_ko.oya
            ? `${score.score.tsumo.self_ko.oya}`
            : "❌"}
        </Text>
      </Grid>

      <Grid
        flexDirection={"column"}
        templateColumns={{sp:"100px", tb:"repeat(1, 210px)"}}
        gap={1}
      >
        <Text
          fontFamily="gothic.MPLUS"
          fontWeight="black"
          fontSize={{sp:'xx-small', tb:"md"}}
          letterSpacing={1.2}
        >
          ロン
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={{sp:'xx-small', tb:"md"}} letterSpacing={1.2}>
          自分が子:{" "}
          {score.score.ron.self_ko.person
            ? `${score.score.ron.self_ko.person}`
            : "❌"}
        </Text>
        <Text fontFamily="gothic.MPLUS" fontSize={{sp:'xx-small', tb:"md"}} letterSpacing={1.2}>
          自分が親:{" "}
          {score.score.ron.self_oya.person
            ? `${score.score.ron.self_oya.person}`
            : "❌"}
        </Text>
      </Grid>
    </Flex>
  );
};
