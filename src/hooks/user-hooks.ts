import { userServices } from "@/services/users-services";
import { StandardResponse } from "@/types/response";
import { UserDetailsType } from "@/types/user-details.type";
import { loginType } from "@/validators/login.schema";
import { signupType } from "@/validators/signup.schema";
import {
  QueryKey,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

type GetUserQueryKey = ["user", string | null | undefined];

type GetUserOptions = Omit<
  UseQueryOptions<
    StandardResponse<UserDetailsType>,
    AxiosError,
    StandardResponse<UserDetailsType>,
    GetUserQueryKey
  >,
  "queryKey" | "queryFn"
> & {
  onSuccess?: (data: StandardResponse<UserDetailsType>) => void;
};

export const useLogin = () => {
  return useMutation<
    StandardResponse<{ token: string; user: UserDetailsType }>,
    AxiosError,
    loginType
  >({
    mutationFn: (credentials) =>
      userServices.login(credentials).then((res) => res.data),
  });
};

export const useCreateUser = () => {
  return useMutation<
    StandardResponse<{ token: string; user: UserDetailsType }>,
    AxiosError,
    signupType
  >({
    mutationFn: (userData) =>
      userServices.createUser(userData).then((res) => res.data),
  });
};

export const useUpdateUser = () => {
  return useMutation<
    StandardResponse<{ modifiedCount: number }>,
    AxiosError,
    { id: string; userData: Partial<UserDetailsType> }
  >({
    mutationFn: ({ id, userData }) =>
      userServices.updateUser(id, userData).then((res) => res.data),
  });
};

export const useGetUser = (id?: string | null, options?: GetUserOptions) => {
  const query = useQuery<
    StandardResponse<UserDetailsType>,
    AxiosError,
    StandardResponse<UserDetailsType>,
    GetUserQueryKey
  >({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await userServices.getUser(id!);
      return res.data;
    },
    ...options,
    enabled: !!id && options?.enabled !== false,
  });

  if (query.isSuccess && options?.onSuccess) {
    options.onSuccess(query.data);
  }

  return query;
};

export const useCheckSession = (
  options?: Omit<
    UseQueryOptions<
      StandardResponse<{ isSession: boolean; user: UserDetailsType }>,
      AxiosError,
      StandardResponse<{ isSession: boolean; user: UserDetailsType }>,
      QueryKey
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<
    StandardResponse<{ isSession: boolean; user: UserDetailsType }>,
    AxiosError
  >({
    queryKey: ["session"],
    queryFn: () => userServices.checkSession().then((res) => res.data),
    ...options,
  });
};
