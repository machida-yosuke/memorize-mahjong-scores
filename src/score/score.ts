import { z } from 'zod'
import { ronScoreSchema,  } from './ron_scores';
import { tsumoScoreSchema } from './tsumo_scores';

const ronSchema = z.union([ronScoreSchema, z.literal(null)]);
const tsumoArraySchema = z.union([z.array(tsumoScoreSchema), z.literal(null)]);
const tsumoSchema = z.union([tsumoScoreSchema, z.literal(null)]);

export const ScoreSchema = z.object({
  han: z.number().min(1).max(13),
  fu: z.union([z.number().min(20).max(110), z.literal(undefined)]),
  score: z.array(z.object({
    tsumo: z.object({
      ko: tsumoArraySchema,
      oya:tsumoSchema,
    }),
    ron: z.object({
      ko: ronSchema,
      oya: ronSchema,
    })
  }))
});


export type ScoreType = z.infer<typeof ScoreSchema>;