import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "Service";
import { toast } from "react-toastify";

export const useDeleteMutation = (url, invalidatedQuery) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteData(`${url}/${id}`),
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
