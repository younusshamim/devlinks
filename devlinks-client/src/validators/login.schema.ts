import { z } from "zod";
import { requiredString, stringOptional } from "./common-rules";

export const loginSchema = z.object({
  email: requiredString,
  password: stringOptional,
});

export type loginType = z.infer<typeof loginSchema>;
