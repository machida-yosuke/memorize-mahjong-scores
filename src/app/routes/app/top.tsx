import { ScoreList } from "@/app/features/score/components/score-list";
import { ContentLayout } from "@/components/layouts/content-layout";
import { FU, type Fu } from "@/score/fu";
import { HAN, type Han } from "@/score/han";
import { ALL_SCORES, type ScoreType } from "@/score/score";
import { random } from "@/utils/array/compareExclude";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { type ChangeEvent, useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  tsumo: {
    self_ko: {
      ko: number;
      oya: number;
    };
    self_oya: {
      all: number;
    };
  };
  ron: {
    self_ko: {
      person: number;
    };
    self_oya: {
      person: number;
    };
  };
};

type CorrectCollection = {
  isTsumoSelfKoKoCorrect: boolean | null;
  isTsumoSelfKoOyaCorrect: boolean | null;
  isTsumoSelfOyaCorrect: boolean | null;
  isRonSelfKoCorrect: boolean | null;
  isRonSelfOyaCorrect: boolean | null;
};

export const TopRoute = () => {
  const [isShowScoreList, setIsShowScoreList] = useState<boolean>(false);

  const [selectedMinHan, setSelectedMinHan] = useState<Han>();
  const [selectedMaxHan, setSelectedMaxHan] = useState<Han>();

  const [selectedMinFu, setSelectedMinFu] = useState<Fu>();
  const [selectedMaxFu, setSelectedMaxFu] = useState<Fu>();

  const [correctCollection, setCorrectCollection] = useState<CorrectCollection>(
    {
      isTsumoSelfKoKoCorrect: null,
      isTsumoSelfKoOyaCorrect: null,
      isTsumoSelfOyaCorrect: null,
      isRonSelfKoCorrect: null,
      isRonSelfOyaCorrect: null,
    },
  );

  const resetCorrectCollection = () => {
    setCorrectCollection({
      isTsumoSelfKoKoCorrect: null,
      isTsumoSelfKoOyaCorrect: null,
      isTsumoSelfOyaCorrect: null,
      isRonSelfKoCorrect: null,
      isRonSelfOyaCorrect: null,
    });
  };

  const [answer, setAnswer] = useState<ScoreType>();

  useEffect(() => {
    selectAnswer();
  }, []);

  const next = () => {
    reset();
    resetCorrectCollection();
    selectAnswer();
  };

  const selectAnswer = () => {
    const flat = ALL_SCORES.flat();
    const hanFiltered = flat.filter(
      (score) =>
        score.han >= (selectedMinHan ?? 0) &&
        score.han <= (selectedMaxHan ?? HAN.length),
    );

    const fuHanFiltered = hanFiltered.filter((score) => {
      if (!score.fu) return true;
      return (
        score.fu >= (selectedMinFu ?? 0) &&
        score.fu <= (selectedMaxFu ?? Math.max(...FU))
      );
    });

    setAnswer(random(fuHanFiltered)[0]);
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const checkAnswer: SubmitHandler<Inputs> = (data) => {
    if (!answer) return;
    const isTsumoSelfKoKoCorrect =
      answer.score.tsumo.self_ko.ko === (data.tsumo.self_ko.ko || null);
    const isTsumoSelfKoOyaCorrect =
      answer.score.tsumo.self_ko.oya === (data.tsumo.self_ko.oya || null);
    const isTsumoSelfOyaCorrect =
      answer.score.tsumo.self_oya.all === (data.tsumo.self_oya.all || null);
    const isRonSelfKoCorrect =
      answer.score.ron.self_ko.person === (data.ron.self_ko.person || null);
    const isRonSelfOyaCorrect =
      answer.score.ron.self_oya.person === (data.ron.self_oya.person || null);
    setCorrectCollection({
      isTsumoSelfKoKoCorrect,
      isTsumoSelfKoOyaCorrect,
      isTsumoSelfOyaCorrect,
      isRonSelfKoCorrect,
      isRonSelfOyaCorrect,
    });
  };

  return (
    <ContentLayout title="麻雀の点数は覚えろ！！">
      <main>
        <Box
          minHeight={"100svh"}
          w={"full"}
          overflow={"hidden"}
          bg={"white.main"}
        >
          <FormControl as={"form"} onSubmit={handleSubmit(checkAnswer)}>
            <Flex
              alignItems={"center"}
              flexDirection={"column"}
              p={{ sp: 5, tb: 10 }}
            >
              <Text
                fontFamily="gothic.MPLUS"
                fontWeight="black"
                fontSize={"4xl"}
                letterSpacing={1.2}
              >
                問題
              </Text>
              <Box h={8} />
              {answer ? (
                <Text
                  fontFamily="gothic.MPLUS"
                  fontWeight="black"
                  fontSize={"2xl"}
                  letterSpacing={1.2}
                >
                  {answer?.han}ハン{answer?.fu && `/${answer?.fu}フ`}の点数は？
                </Text>
              ) : (
                <Text
                  fontFamily="gothic.MPLUS"
                  fontWeight="black"
                  fontSize={"2xl"}
                  letterSpacing={1.2}
                >
                  問題がありません
                </Text>
              )}

              <Box h={8} />

              <Grid flexDirection={"column"} gap={1}>
                <Text
                  fontFamily="gothic.MPLUS"
                  fontWeight="black"
                  fontSize={"md"}
                  letterSpacing={1.2}
                  textAlign={"center"}
                >
                  ツモ
                </Text>

                <Flex gap={8} flexDirection={{ sp: "column", tb: "row" }}>
                  <Flex flexDirection={"column"} gap={2}>
                    <Text
                      fontFamily="gothic.MPLUS"
                      fontSize={"md"}
                      letterSpacing={1.2}
                      textAlign={"center"}
                    >
                      🀄️自分が子🀄️
                    </Text>

                    <Flex alignItems={"center"} gap={2} position={"relative"}>
                      <Text
                        fontFamily="gothic.MPLUS"
                        fontSize={"md"}
                        letterSpacing={1.2}
                      >
                        子から
                      </Text>
                      {correctCollection.isTsumoSelfKoKoCorrect ==
                      null ? null : (
                        <Box position={"absolute"} left={"50%"}>
                          <Text fontSize={50}>
                            {correctCollection.isTsumoSelfKoKoCorrect
                              ? "⭕️"
                              : "❌"}
                          </Text>
                        </Box>
                      )}
                      <Input
                        fontFamily="gothic.MPLUS"
                        fontWeight="400"
                        type="number"
                        fontSize={16}
                        placeholder="点数を入力"
                        w={32}
                        {...register("tsumo.self_ko.ko", {
                          valueAsNumber: true,
                        })}
                      />
                    </Flex>
                    <Flex alignItems={"center"} gap={2} position={"relative"}>
                      <Text
                        fontFamily="gothic.MPLUS"
                        fontSize={"md"}
                        letterSpacing={1.2}
                      >
                        親から
                      </Text>
                      {correctCollection.isTsumoSelfKoOyaCorrect ==
                      null ? null : (
                        <Box position={"absolute"} left={"50%"}>
                          <Text fontSize={50}>
                            {correctCollection.isTsumoSelfKoOyaCorrect
                              ? "⭕️"
                              : "❌"}
                          </Text>
                        </Box>
                      )}
                      <Input
                        fontFamily="gothic.MPLUS"
                        fontWeight="400"
                        type="number"
                        fontSize={16}
                        placeholder="点数を入力"
                        w={32}
                        {...register("tsumo.self_ko.oya", {
                          valueAsNumber: true,
                        })}
                      />
                    </Flex>
                  </Flex>

                  <Flex flexDirection={"column"} gap={2}>
                    <Text
                      fontFamily="gothic.MPLUS"
                      fontSize={"md"}
                      letterSpacing={1.2}
                      textAlign={"center"}
                    >
                      🀄️自分が親🀄️
                    </Text>

                    <Flex alignItems={"center"} gap={2} position={"relative"}>
                      <Text
                        fontFamily="gothic.MPLUS"
                        fontSize={"md"}
                        letterSpacing={1.2}
                      >
                        全員から
                      </Text>
                      {correctCollection.isTsumoSelfOyaCorrect ==
                      null ? null : (
                        <Box position={"absolute"} left={"50%"}>
                          <Text fontSize={50}>
                            {correctCollection.isTsumoSelfOyaCorrect
                              ? "⭕️"
                              : "❌"}
                          </Text>
                        </Box>
                      )}
                      <Input
                        fontFamily="gothic.MPLUS"
                        fontWeight="400"
                        type="number"
                        fontSize={16}
                        placeholder="点数を入力"
                        w={32}
                        {...register("tsumo.self_oya.all", {
                          valueAsNumber: true,
                        })}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Grid>

              <Box h={8} />

              <Grid flexDirection={"column"} gap={1}>
                <Text
                  fontFamily="gothic.MPLUS"
                  fontWeight="black"
                  fontSize={"md"}
                  letterSpacing={1.2}
                  textAlign={"center"}
                >
                  ロン
                </Text>

                <Box h={4} />

                <Flex gap={8} flexDirection={{ sp: "column", tb: "row" }}>
                  <Flex flexDirection={"column"} gap={2}>
                    <Text
                      fontFamily="gothic.MPLUS"
                      fontSize={"md"}
                      letterSpacing={1.2}
                      textAlign={"center"}
                    >
                      🀄️自分が子🀄️
                    </Text>

                    <Flex alignItems={"center"} gap={2} position={"relative"}>
                      <Text
                        fontFamily="gothic.MPLUS"
                        fontSize={"md"}
                        letterSpacing={1.2}
                      >
                        相手から
                      </Text>
                      {correctCollection.isRonSelfKoCorrect == null ? null : (
                        <Box position={"absolute"} left={"50%"}>
                          <Text fontSize={50}>
                            {correctCollection.isRonSelfKoCorrect ? "⭕️" : "❌"}
                          </Text>
                        </Box>
                      )}
                      <Input
                        fontFamily="gothic.MPLUS"
                        fontWeight="400"
                        type="number"
                        fontSize={16}
                        placeholder="点数を入力"
                        w={32}
                        {...register("ron.self_ko.person", {
                          valueAsNumber: true,
                        })}
                      />
                    </Flex>
                  </Flex>

                  <Flex flexDirection={"column"} gap={2} position={"relative"}>
                    <Text
                      fontFamily="gothic.MPLUS"
                      fontSize={"md"}
                      letterSpacing={1.2}
                      textAlign={"center"}
                    >
                      🀄️自分が親🀄️
                    </Text>
                    <Flex alignItems={"center"} gap={2}>
                      <Text
                        fontFamily="gothic.MPLUS"
                        fontSize={"md"}
                        letterSpacing={1.2}
                      >
                        相手から
                      </Text>
                      {correctCollection.isRonSelfOyaCorrect == null ? null : (
                        <Box position={"absolute"} left={"50%"}>
                          <Text fontSize={50}>
                            {correctCollection.isRonSelfOyaCorrect
                              ? "⭕️"
                              : "❌"}
                          </Text>
                        </Box>
                      )}
                      <Input
                        fontFamily="gothic.MPLUS"
                        fontWeight="400"
                        type="number"
                        fontSize={16}
                        placeholder="点数を入力"
                        w={32}
                        {...register("ron.self_oya.person", {
                          valueAsNumber: true,
                        })}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Grid>

              <Box h={8} />

              <Flex
                alignItems={"center"}
                gap={5}
                flexDirection={"column"}
                width={"sm"}
              >
                <Input
                  type="submit"
                  value="答え合わせ"
                  fontFamily="gothic.MPLUS"
                  fontWeight="black"
                  cursor={"pointer"}
                  w={"150px"}
                />
                <Button onClick={() => next()} w={"150px"}>
                  次の問題
                </Button>
                <Button onClick={() => setIsShowScoreList(true)} w={"150px"}>
                  点数一覧
                </Button>
              </Flex>
            </Flex>
          </FormControl>

          <Flex flexDirection={"column"} alignItems={"center"} gap={2} p={10}>
            <Flex alignItems={"center"} gap={2}>
              <Text
                fontFamily="gothic.MPLUS"
                fontSize={"md"}
                letterSpacing={1.2}
              >
                最小ハン数
              </Text>
              <Select
                placeholder="ハン数を選択"
                onChange={(e) =>
                  setSelectedMinHan(e.target.value as unknown as Han)
                }
                w={150}
              >
                {HAN.map((han) => (
                  <option key={han} value={han}>
                    {han}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex alignItems={"center"} gap={2}>
              <Text
                fontFamily="gothic.MPLUS"
                fontSize={"md"}
                letterSpacing={1.2}
              >
                最大ハン数
              </Text>
              <Select
                placeholder="ハン数を選択"
                onChange={(e) =>
                  setSelectedMaxHan(e.target.value as unknown as Han)
                }
                isDisabled={!selectedMinHan}
                w={150}
              >
                {HAN.filter((han) => han >= (selectedMinHan ?? 0)).map(
                  (han) => (
                    <option key={han} value={han}>
                      {han}
                    </option>
                  ),
                )}
              </Select>
            </Flex>

            <Flex alignItems={"center"} gap={2}>
              <Text
                fontFamily="gothic.MPLUS"
                fontSize={"md"}
                letterSpacing={1.2}
              >
                最小フ数
              </Text>
              <Select
                placeholder="フ数を選択"
                onChange={(e) =>
                  setSelectedMinFu(e.target.value as unknown as Fu)
                }
                w={150}
              >
                {FU.map((fu) => (
                  <option key={fu} value={fu}>
                    {fu}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex alignItems={"center"} gap={2}>
              <Text
                fontFamily="gothic.MPLUS"
                fontSize={"md"}
                letterSpacing={1.2}
              >
                最小フ数
              </Text>
              <Select
                placeholder="フ数を選択"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSelectedMaxFu(e.target.value as unknown as Fu)
                }
                isDisabled={!selectedMinFu}
                w={150}
              >
                {FU.filter((fu) => fu >= (selectedMinFu ?? 0)).map((fu) => (
                  <option key={fu} value={fu}>
                    {fu}
                  </option>
                ))}
              </Select>
            </Flex>
          </Flex>

          <ScoreList
            allScore={ALL_SCORES}
            isOpen={isShowScoreList}
            onClose={() => setIsShowScoreList(false)}
          />
        </Box>
      </main>
    </ContentLayout>
  );
};
