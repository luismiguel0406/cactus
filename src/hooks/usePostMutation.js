import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postData } from "Service";
import { toast } from "react-toastify";

export const usePostMutation = (url, invalidatedQuery) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body) => postData(url, body),
    onError: (data) => {
      return toast.error(data.error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([invalidatedQuery]);
      toast.success(data.message, { theme: "light" });
    },
  });

  return mutation;
};
