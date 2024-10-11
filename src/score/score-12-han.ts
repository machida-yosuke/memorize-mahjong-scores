import type { ScoreType } from "./score";

export const SCORES_12_HAN: ScoreType[] = [
  {
    han: 12,
    score: {
      tsumo: {
        self_ko: {
          ko: 6000,
          oya: 12000,
        },
        self_oya: {
          all: 12000,
        },
      },
      ron: {
        self_ko: {
          person: 24000,
        },
        self_oya: {
          person: 36000,
        },
      },
    },
  },
];
