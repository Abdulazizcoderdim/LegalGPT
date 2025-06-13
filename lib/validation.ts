import { z } from "zod";

export const HighlightItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  severity: z.enum(["low", "medium", "high", "warning"]),
});

export const LegalGPTResponseSchema = z.object({
  summary: z.string(),
  highlights: z.array(HighlightItemSchema),
  originalText: z.string(),
});
