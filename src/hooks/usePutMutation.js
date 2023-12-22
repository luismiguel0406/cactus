import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putData } from "Service";
import { toast } from "react-toastify";

export const usePutMutation = (url, invalidatedQuery) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body) => putData(url, body),
    onError: (data) => toast.error(data.error),
    onSuccess: (data) => {
      queryClient.invalidateQueries([invalidatedQuery]);
      toast.info(data.message, { theme: "light" });
    },
  });

  return mutation;
};
