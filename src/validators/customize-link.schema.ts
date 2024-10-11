import { z } from "zod";
import { numberOptional, requiredString, validateUrl } from "./common-rules";

export const platformSchema = z.object({
  name: requiredString,
  link: validateUrl,
  displayOrder: numberOptional,
});

export const customizeLinksArraySchema = z.object({
  platforms: z.array(platformSchema),
});

export type PlatformType = z.infer<typeof platformSchema>;
export type CustomizeLinksArrayType = z.infer<typeof customizeLinksArraySchema>;
