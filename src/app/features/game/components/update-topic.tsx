import { Button } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { isEmptyTopicTextAtom } from "../store/topicTextState";
import { EditTopicModal } from "./edit-topic-modal";

export const UpdateTopic = () => {
  const isEmptyTopicText = useAtomValue(isEmptyTopicTextAtom);
  const [isOpenTopicEditor, setIsOpenTopicEditor] = useState(false);
  const openTopicEditor = () => setIsOpenTopicEditor(true);
  const closeTopicEditor = () => setIsOpenTopicEditor(false);

  return (
    <>
      <Button
        onClick={openTopicEditor}
        fontFamily="gothic.MPLUS"
        fontWeight="black"
        fontSize={{ sp: "sm", tb: "md", pc: "md" }}
      >
        お題を{isEmptyTopicText ? "記入" : "変更"}
      </Button>

      {isOpenTopicEditor && (
        <EditTopicModal
          isOpenTopicEditor={isOpenTopicEditor}
          closeTopicEditor={closeTopicEditor}
        />
      )}
    </>
  );
};
