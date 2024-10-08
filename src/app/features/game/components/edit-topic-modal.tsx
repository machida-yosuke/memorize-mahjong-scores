import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Modal,
  Text,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { type SubmitHandler, useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { topicTextAtom } from "../store/topicTextState";

type Props = {
  isOpenTopicEditor: boolean;
  closeTopicEditor: () => void;
};

type Inputs = {
  topic: string;
};

export const EditTopicModal = ({
  isOpenTopicEditor,
  closeTopicEditor,
}: Props) => {
  const [topicText, UpdateTopicText] = useAtom(topicTextAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    UpdateTopicText(data.topic);
    closeTopicEditor();
  };

  const onReset = () => {
    reset({
      topic: "",
    });
  };

  return (
    <>
      <Modal isOpen={isOpenTopicEditor} onClose={closeTopicEditor} isCentered>
        <Box
          position={"fixed"}
          top="0"
          left="0"
          w="full"
          h="full"
          bgColor={"black.main"}
          opacity={0.5}
          onClick={closeTopicEditor}
        />
        <Box
          position={"absolute"}
          top="50%"
          left="50%"
          transform={"translate(-50%, -50%)"}
          bgColor={"white.main"}
          width={{ sp: "90%", tb: "lg", pc: "container.md" }}
          p={10}
          borderRadius={20}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Button
            position={"absolute"}
            top={4}
            right={4}
            width={"40px"}
            height={"40px"}
            onClick={closeTopicEditor}
          >
            <CgClose />
          </Button>
          <Text
            fontFamily="gothic.MPLUS"
            fontWeight="black"
            textAlign={"center"}
            fontSize={{ sp: "md", tb: "md", pc: "x-large" }}
          >
            お題を入力してください
          </Text>

          <FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Input
              fontFamily="gothic.MPLUS"
              fontWeight="400"
              type="text"
              fontSize={{ sp: "md", tb: "md", pc: "md" }}
              placeholder="ブレストするお題を入力してください。"
              defaultValue={topicText}
              maxLength={150}
              {...register("topic", { required: true })}
            />

            {errors.topic && (
              <FormHelperText
                fontSize={{ sp: "sm", tb: "sm", pc: "sm" }}
                fontFamily="gothic.MPLUS"
                fontWeight="400"
                color={"red.500"}
              >
                お題を入力してください
              </FormHelperText>
            )}

            <Flex justifyContent={"center"} gap={8} mt={4}>
              <Input
                type="submit"
                value="決定"
                fontSize={{ sp: "sm", tb: "sm", pc: "md" }}
                fontFamily="gothic.MPLUS"
                fontWeight="black"
                cursor={"pointer"}
              />

              <Input
                type="button"
                onClick={() => onReset()}
                value="リセット"
                fontFamily="gothic.MPLUS"
                fontSize={{ sp: "sm", tb: "sm", pc: "md" }}
                fontWeight="black"
                bgColor={"red.500"}
                color={"white.main"}
                _hover={{ bgColor: "red.400" }}
                cursor={"pointer"}
              />
            </Flex>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};
