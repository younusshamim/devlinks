import { ToastOptions, toast } from "react-hot-toast";

const PRIMARY_COLOR = "#633bfe";
const ERROR_COLOR = "#cc0000";

const baseToastOptions: ToastOptions = {
  duration: 4000,
  position: "top-right",
  style: {
    padding: "16px",
    color: "#fff",
    borderRadius: "8px",
  },
};

export const successToastOptions: ToastOptions = {
  ...baseToastOptions,
  iconTheme: {
    primary: "white",
    secondary: "black",
  },
  style: {
    ...baseToastOptions.style,
    background: PRIMARY_COLOR,
  },
};

// Error toast options
export const errorToastOptions: ToastOptions = {
  ...baseToastOptions,
  style: {
    ...baseToastOptions.style,
    background: ERROR_COLOR,
  },
  icon: "❌",
};

export const showSuccessToast = (message: string) => {
  toast.success(message, successToastOptions);
};

export const showErrorToast = (message: string) => {
  toast.error(message, errorToastOptions);
};
