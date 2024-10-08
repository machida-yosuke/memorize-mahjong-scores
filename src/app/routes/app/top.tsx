
import { ScoreList } from "@/app/features/score/components/score-list";
import { ContentLayout } from "@/components/layouts/content-layout";
// import { Fu } from "@/score/fu";
// import { Han } from "@/score/han";
import { ALL_SCORES } from "@/score/score";
import { random } from "@/utils/array/compareExclude";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export const TopRoute = () => {
  // const [isShowScoreList, setIsShowScoreList] = useState<boolean>(false);
  // const [selecedHanRange, setSelectedHanRange] = useState<Han[]>([1,13]);
  // const [selecedFuRange, setSelectedFuRange] = useState<Fu[]>([20,50]);

  const test = random(ALL_SCORES.flat());
  console.log(test[0]);

  return (
    <ContentLayout title="麻雀の点数は覚えろ！！">
      <main>
        <Box
          minHeight={"100svh"}
          w={"full"}
          overflow={"hidden"}
          bg={"white.main"}
        >
          {/* {isShowScoreList && */}
            <ScoreList allScore={ALL_SCORES}/>
          {/* } */}
        </Box>
      </main>
    </ContentLayout>
  );
};
