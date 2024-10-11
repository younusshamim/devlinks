import { z } from "zod";
import { requiredString, stringOptional } from "./common-rules";

export const signupSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredString,
  password: stringOptional,
});

export type signupType = z.infer<typeof signupSchema>;
