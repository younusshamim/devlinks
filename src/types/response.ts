export interface StandardResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
