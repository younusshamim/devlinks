import { z } from "zod";
import {
  requiredString,
  stringOptional,
  validateOptionalEmail,
} from "./common-rules";

export const profileDetailsSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: validateOptionalEmail,
  picture: stringOptional,
});

export type ProfileDetailsType = z.infer<typeof profileDetailsSchema>;
