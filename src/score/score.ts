import { z } from "zod";
import { fuSchema } from "./fu";
import { hanSchema } from "./han";
import { ronScoreSchema } from "./ron_scores";
import { SCORES_1_HAN } from "./score-1-han";
import { SCORES_2_HAN } from "./score-2-han";
import { SCORES_3_HAN } from "./score-3-han";
import { SCORES_4_HAN } from "./score-4-han";
import { SCORES_5_HAN } from "./score-5-han";
import { SCORES_6_HAN } from "./score-6-han";
import { SCORES_7_HAN } from "./score-7-han";
import { SCORES_8_HAN } from "./score-8-han";
import { SCORES_9_HAN } from "./score-9-han";
import { SCORES_10_HAN } from "./score-10-han";
import { SCORES_11_HAN } from "./score-11-han";
import { SCORES_12_HAN } from "./score-12-han";
import { SCORES_13_HAN } from "./score-13-han";
import { tsumoScoreSchema } from "./tsumo_scores";

const ronSchema = z.union([ronScoreSchema, z.literal(null)]);
const tsumoSchema = z.union([tsumoScoreSchema, z.literal(null)]);

export const ScoreSchema = z.object({
  han: hanSchema,
  fu: z.union([fuSchema, z.literal(undefined)]),
  score: z.object({
    tsumo: z.object({
      self_ko: z.object({
        ko: tsumoSchema,
        oya: tsumoSchema,
      }),
      self_oya: z.object({
        all: tsumoSchema,
      }),
    }),
    ron: z.object({
      self_ko: z.object({
        person: ronSchema,
      }),
      self_oya: z.object({
        person: ronSchema,
      }),
    }),
  }),
});

export type ScoreType = z.infer<typeof ScoreSchema>;

export const ALL_SCORES = [
  SCORES_1_HAN,
  SCORES_2_HAN,
  SCORES_3_HAN,
  SCORES_4_HAN,
  SCORES_5_HAN,
  SCORES_6_HAN,
  SCORES_7_HAN,
  SCORES_8_HAN,
  SCORES_9_HAN,
  SCORES_10_HAN,
  SCORES_11_HAN,
  SCORES_12_HAN,
  SCORES_13_HAN,
];
