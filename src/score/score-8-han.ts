import type { ScoreType } from "./score";

export const SCORES_8_HAN: ScoreType[] = [
  {
    han: 8,
    score: {
      tsumo: {
        self_ko: {
          ko: 4000,
          oya: 8000,
        },
        self_oya: {
          all: 8000,
        },
      },
      ron: {
        self_ko: {
          person: 16000,
        },
        self_oya: {
          person: 24000,
        },
      },
    },
  },
];
