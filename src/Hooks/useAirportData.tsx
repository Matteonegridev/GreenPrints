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
    gcTime: 1000 * 30,
    select: (data) =>
      data.map((value: Airport) => ({
        city: value.city,
        name: value.name,
        code: value.code,
      })),
  });

  useEffect(() => {
    if (data) {
      const filteredElements = data.map((values: Airport) =>
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
