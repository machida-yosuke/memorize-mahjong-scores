import type { ScoreType } from "./score";

export const SCORES_5_HAN: ScoreType[] = [
  {
    han: 5,
    score: {
      tsumo: {
        self_ko: {
          ko: 2000,
          oya: 4000,
        },
        self_oya: {
          all: 4000,
        },
      },
      ron: {
        self_ko: {
          person: 8000,
        },
        self_oya: {
          person: 12000,
        },
      },
    },
  },
];
