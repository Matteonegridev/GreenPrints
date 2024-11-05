import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const getAirportData = async () => {
  const url = import.meta.env.VITE_AIRPORT_URL;
  const result = await axios.get(url);
  console.log("Response Data:", result.data);
  return result.data;
};

type Airport = {
  city: string;
  name: string;
  code: string;
};

const useAirportData = () => {
  const [search, setSearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Airport[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["airports"],
    queryFn: getAirportData,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    gcTime: 1000 * 30,
    select: (data) => {
      const resultData = data.map((value: Airport) => ({
        city: value.city,
        name: value.name,
        code: value.code,
      }));
      return resultData;
    },
  });

  useEffect(() => {
    if (data) {
      const filteredElements = data.filter((values: Airport) =>
        values.city.toLowerCase().includes(search.toLowerCase())
      );
      // I dati sono immagazzinati in suggestions:
      setSuggestions(filteredElements);
    } else {
      setSuggestions([]);
    }
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }
  }, [data, search]);

  return {
    isLoading,
    error,
    search,
    setSearch,
    suggestions,
    setSuggestions,
  };
};

export default useAirportData;
