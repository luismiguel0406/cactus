import { useQuery } from "@tanstack/react-query";
import { getData } from "Service";

export const useGetData = (url) => {
  const urlSplit = url.split("/");
  const key = urlSplit[1];

  const query = useQuery({ queryKey: [key], queryFn: () => getData(url) });

  return query;
};
