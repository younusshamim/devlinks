import { z } from "zod";
import { requiredString, stringOptional } from "./common-rules";

export const signupSchema = z.object({
  firstName: stringOptional,
  lastName: stringOptional,
  email: requiredString,
  password: requiredString,
});

export type signupType = z.infer<typeof signupSchema>;
