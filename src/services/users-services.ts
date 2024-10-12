import { StandardResponse } from "@/types/response";
import { UserDetailsType } from "@/types/user-details.type";
import { loginType } from "@/validators/login.schema";
import { signupType } from "@/validators/signup.schema";
import api from "./api";

export const userServices = {
  login: (credentials: loginType) =>
    api.post<StandardResponse<{ token: string; user: UserDetailsType }>>(
      "/users/login",
      credentials
    ),

  createUser: (userData: signupType) =>
    api.post<StandardResponse<{ token: string; user: UserDetailsType }>>(
      "/users/create",
      userData
    ),

  updateUser: (id: string, userData: Partial<UserDetailsType>) =>
    api.put<StandardResponse<{ modifiedCount: number }>>(
      `/users/edit/${id}`,
      userData
    ),

  getUser: (id: string) =>
    api.get<StandardResponse<UserDetailsType>>(`/users/${id}`),

  checkSession: () =>
    api.get<StandardResponse<{ isSession: boolean; user: UserDetailsType }>>(
      `/check-session`
    ),
};
