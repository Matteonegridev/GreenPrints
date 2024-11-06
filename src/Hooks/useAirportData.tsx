import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const getAirportData = async () => {
  const url = import.meta.env.VITE_AIRPORT_URL;
  const result = await axios.get(url);
  console.log("Response Data:", result.data);
  return result.data;
};

type Airport = {
  country: string;
  name: string;
  code: string;
};

const useAirportData = () => {
  const [search, setSearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [searchDebounce] = useDebounce(search, 1000);

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
      }));
      return resultData;
    },
  });

  useEffect(() => {
    if (data) {
      const filteredElements = data.filter(
        (values: Airport, query: string) =>
          values.name.toLowerCase().includes(query.toLowerCase()) ||
          values.country.toLowerCase().includes(query.toLowerCase()) ||
          values.code.toLowerCase().includes(query.toLowerCase())
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
  }, [data, searchDebounce, search]);

  return {
    isLoading,
    search,
    error,
    searchDebounce,
    setSearch,
    suggestions,
    setSuggestions,
  };
};

export default useAirportData;
