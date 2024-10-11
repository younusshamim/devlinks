import { messages } from "@/config/messages";
import { z } from "zod";

export const fileSchema = z.object({
  name: z.string(),
  url: z.string(),
  size: z.number(),
});

export const requiredString = z
  .string({ message: messages.fieldRequired })
  .min(1, { message: messages.fieldRequired });

export const stringOptional = z.string().optional();

export const boolean = z.boolean();

export const validateEmail = z
  .string({ message: messages.fieldRequired })
  .min(1, { message: messages.fieldRequired })
  .email({ message: messages.invalidEmail });

export const validateOptionalEmail = z
  .string()
  .nullable()
  .optional()
  .refine(
    (value) =>
      value === null ||
      value === "" ||
      z.string().email().safeParse(value).success,
    {
      message: messages.invalidEmail,
    }
  );

export const validateUrl = z
  .string({ message: messages.fieldRequired })
  .min(1, { message: messages.fieldRequired })
  .url({ message: messages.invalidUrl });
