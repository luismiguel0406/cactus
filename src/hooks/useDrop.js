import { useQuery } from "@tanstack/react-query";
import { getData } from "Service";

export const useDrop = (url) => {
  const urlSplit = url.split("/");
  const key = urlSplit[1];

  const { data } = useQuery({ queryKey: [key], queryFn: () => getData(url) });
  if (!data) return;
  const options = data?.map((item) => ({
    value: item.id,
    label: item.description,
    mask: item?.mask,
  }));
  return options;
};
