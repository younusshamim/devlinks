import { z } from "zod";
import { requiredString } from "./common-rules";

export const loginSchema = z.object({
  email: requiredString,
  password: requiredString,
});

export type loginType = z.infer<typeof loginSchema>;
