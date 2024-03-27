import axiosInstance from "~/utils/axiosInstance";
import { commentApplicationEndpoints } from "./endpoints";

class AuthService {
  async login(payload: any) {
    const response = await axiosInstance.post(
      commentApplicationEndpoints.login,
      payload
    );
    return response.data;
  }

  async register(payload: any) {
    const response = await axiosInstance.post(
      commentApplicationEndpoints.register,
      payload
    );

    return response.data;
  }
}

export { AuthService };
