import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type AirportValues = {
  origin: string;
  destination: string;
  passengers: number;
};

const getClimateData = async ({
  origin,
  destination,
  passengers,
}: AirportValues) => {
  const apiKey = import.meta.env.VITE_GOCLIMATE_API_KEY;
  const url = import.meta.env.VITE_GOCLIMATE_URL;
  console.log("API Key:", apiKey);
  console.log("URL:", url);
  const result = await axios.get(url, {
    auth: {
      username: apiKey,
      password: "",
    },
    params: {
      " segments[0][origin]": origin,
      " segments[0][destination]": destination,
      cabin_class: "economy",
      passengers,
    },
  });

  console.log(
    "Estimated Footprint (tonnes CO2e):",
    result.data.footprint / 1000
  );

  console.log("data: ", result.data);
  return result.data;
};

const useClimateData = (
  origin: string,
  destination: string,
  passengers: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["climateData", { origin, destination, passengers }],
    queryFn: () => getClimateData({ origin, destination, passengers }),
    enabled: !!origin && !!destination,
  });

  return { data, isLoading, error };
};

export default useClimateData;
