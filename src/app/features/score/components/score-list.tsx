import type { ScoreType } from "@/score/score";
import {} from "@/utils/array/compareExclude";
import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ScoreListItem } from "./score-list-item";

type Props = {
  allScore: ScoreType[][];
  isOpen: boolean;
  onClose: () => void;
};

export const ScoreList = ({ allScore, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} size={{ sp: "sm", tb: "2xl" }} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"white.main"}>
        <ModalHeader
          textAlign={"center"}
          fontFamily="gothic.MPLUS"
          fontWeight="black"
          fontSize={"xl"}
          letterSpacing={1.2}
        >
          点数一覧
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w={"full"} padding={0} zIndex={1}>
            {allScore.map((scores, index) => (
              <Grid
                key={`han-${index}`}
                w="full"
                templateColumns={{
                  sp: "repeat(1, 320px)",
                  md: "repeat(1, 550px)",
                }}
                justifyContent={"center"}
                gap={10}
                overflow={"hidden"}
              >
                <Box w={"full"} h={1} bg={"black.main"} mt={10} />
                {scores.map((score, index) => (
                  <ScoreListItem
                    key={`han-${score.han}-fu-${score.fu}-${index}`}
                    score={score}
                  />
                ))}
              </Grid>
            ))}
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
