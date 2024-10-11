import type { ScoreType } from "./score";

export const SCORES_6_HAN: ScoreType[] = [
  {
    han: 6,
    score: {
      tsumo: {
        self_ko: {
          ko: 3000,
          oya: 6000,
        },
        self_oya: {
          all: 6000,
        },
      },
      ron: {
        self_ko: {
          person: 12000,
        },
        self_oya: {
          person: 18000,
        },
      },
    },
  },
];
