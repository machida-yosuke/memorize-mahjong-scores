import type { ScoreType } from "./score";

export const SCORES_13_HAN: ScoreType[] = [
  {
    han: 13,
    score: {
      tsumo: {
        self_ko: {
          ko: 8000,
          oya: 16000,
        },
        self_oya: {
          all: 16000,
        },
      },
      ron: {
        self_ko: {
          person: 32000,
        },
        self_oya: {
          person: 48000,
        },
      },
    },
  },
];
