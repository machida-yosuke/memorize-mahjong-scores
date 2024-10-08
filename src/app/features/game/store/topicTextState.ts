import { atom } from "jotai";
export const topicTextAtom = atom("");

export const isEmptyTopicTextAtom = atom((get) => {
  const topicText = get(topicTextAtom);
  return topicText === "";
});
