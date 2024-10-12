import { showErrorToast } from "@/config/toast-options";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLoginError = (error: unknown) => {
  if (error instanceof Error) {
    showErrorToast(`${error.message}`);
  } else {
    showErrorToast("An unknown error occurred");
  }
};
