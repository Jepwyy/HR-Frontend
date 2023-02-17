import { useQuery } from "react-query";
import axios from "../api/api";

export const useEmployees = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["Employess"],
    queryFn: async () => {
      const response = await axios.get("/users/get");
      return response.data;
    },
    // make this default on app.js later
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
  });
  return { isLoading, error, data };
};
