import { z } from "zod";
import { requiredString, validateUrl } from "./common-rules";

export const platformSchema = z.object({
  name: requiredString,
  link: validateUrl,
});

export const customizeLinksArraySchema = z.object({
  platforms: z.array(platformSchema),
});

export type PlatformType = z.infer<typeof platformSchema>;
export type CustomizeLinksArrayType = z.infer<typeof customizeLinksArraySchema>;
