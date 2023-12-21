import { useMutation } from "@tanstack/react-query";
import { postData } from "Service";
import { toast } from "react-toastify";

export const usePostMutation = (url) => {
  const mutation = useMutation({
    mutationFn: (body) => postData(url, body),
    onError: (data) => toast.error(data.error),
    onSuccess: (data) => toast.success(data.message, { theme: "light" }),
  });

  return mutation;
};
