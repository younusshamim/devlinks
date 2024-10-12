/* eslint-disable @typescript-eslint/no-explicit-any */
export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const setUserToLocalStorage = (result: any) => {
  setLocalStorage("token", result.data!.token);
  setLocalStorage("userId", result.data!.user._id as string);
};
