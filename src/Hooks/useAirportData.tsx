import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAirportData = async () => {
  const url = import.meta.env.VITE_AIRPORT_URL;
  const result = await axios.get(url);
  console.log("Response Data:", result.data);
  return result.data;
};

export type Airport = {
  country: string;
  name: string;
  code: string;
  city?: string;
};

const useAirportData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["airports"],
    queryFn: getAirportData,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    gcTime: 1000 * 30,
    select: (data) => {
      const resultData = data.map((value: Airport) => ({
        country: value.country,
        name: value.name,
        code: value.code,
        city: value.city,
      }));
      return resultData;
    },
  });

  return {
    isLoading,
    error,
    data,
  };
};

export default useAirportData;
