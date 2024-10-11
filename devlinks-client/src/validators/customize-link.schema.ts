import { z } from "zod";
import { requiredString, validateUrl } from "./common-rules";

export const customizeLinkSchema = z.object({
  platforms: z.object({
    platformName: requiredString,
    platformURL: validateUrl,
  }),
});

export const customizeLinksArraySchema = z.array(customizeLinkSchema);
