import axios from "axios";
import { commentApplicationEndpoints } from "./endpoints";
import { base_url } from "~/utils/axiosInstance";

class CommentService {
  async getComments(limit: number, token: string) {
    const response = await axios({
      method: "get",
      url: base_url + commentApplicationEndpoints.comment + `/?limit=${limit}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  async getMyComments(token: string) {
    const response = await axios({
      method: "get",
      url: base_url + commentApplicationEndpoints.myComment,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  async postComments(payload: any, token: string) {
    const response = await axios({
      method: "post",
      url: base_url + commentApplicationEndpoints.comment,
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}

export { CommentService };
