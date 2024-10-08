

import { ScoreType } from "@/score/score";
import {} from "@/utils/array/compareExclude";
import {
  Box,
  Grid,
} from "@chakra-ui/react";
import { ScoreListItem } from "./score-list-item";

type Props = {
  allScore: ScoreType[][]
}

export const ScoreList = ({allScore}: Props) => {
  return (
    <Box
      minHeight={"100svh"}
      w={"full"}
      overflow={"hidden"}
      padding={20}
    >
      {allScore.map((scores,index) =>
        <Grid 
          key={`han-${index}`}
          w="full"
          templateColumns={"repeat(1, 550px)"}
          justifyContent={"center"}
          gap={10}
        >
          <Box w={'full'} h={1} bg={"black.main"} mt={10}/>
          {scores.map((score,index) => 
            <ScoreListItem key={`han-${score.han}-fu-${score.fu}-${index}`} score={score}/>
          )}

          </Grid>
        )}
    </Box>
  );
};
