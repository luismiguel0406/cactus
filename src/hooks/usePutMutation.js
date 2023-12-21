import { useMutation } from "@tanstack/react-query";
import { putData } from "Service";
import { toast } from "react-toastify";

export const usePutMutation = (url) => {
  const mutation = useMutation({
    mutationFn: (body) => putData(url, body),
    onError: (data) => toast.error(data.error),
    onSuccess: (data) => toast.success(data.message, { theme: "light" }),
  });

  return mutation;
};
