import axios from "../api/api";
import { UserAuth } from "../context/authContext";

const useRefresh = () => {
  const { setUserData, setToken } = UserAuth();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh");
    setUserData(response.data.user[0]);
    setToken(true);
    return response.data.user;
  };
  return refresh;
};

export default useRefresh;
