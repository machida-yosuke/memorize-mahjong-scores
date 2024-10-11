import type { ScoreType } from "./score";

export const SCORES_4_HAN: ScoreType[] = [
  {
    han: 4,
    fu: 20,
    score: {
      tsumo: {
        self_ko: {
          ko: 1300,
          oya: 2600,
        },
        self_oya: {
          all: 2600,
        },
      },
      ron: {
        self_ko: {
          person: null,
        },
        self_oya: {
          person: null,
        },
      },
    },
  },
  {
    han: 4,
    fu: 25,
    score: {
      tsumo: {
        self_ko: {
          ko: 1600,
          oya: 3200,
        },
        self_oya: {
          all: 3200,
        },
      },
      ron: {
        self_ko: {
          person: 6400,
        },
        self_oya: {
          person: 9600,
        },
      },
    },
  },
  {
    han: 4,
    fu: 30,
    score: {
      tsumo: {
        self_ko: {
          ko: null,
          oya: null,
        },
        self_oya: {
          all: 3900,
        },
      },
      ron: {
        self_ko: {
          person: null,
        },
        self_oya: {
          person: 11600,
        },
      },
    },
  },
  {
    han: 4,
    fu: 40,
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
