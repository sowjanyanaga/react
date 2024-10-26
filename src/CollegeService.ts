import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://18.61.119.159:1313";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getColleges = async (pageSize: number, pageNumber: number) => {
  try {
    const response: AxiosResponse<any> = await apiClient.get(
      "/services/colleges",
      {
        params: {
          pageSize,
          pageNumber,
        },
      }
    );
    // console.log("API Response:", response.data);
    return response.data.content;
  } catch (error) {
    console.error("Error fetching colleges:", error);
    throw error;
  }
};
