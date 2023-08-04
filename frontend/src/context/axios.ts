/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const baseUrl = "http://localhost:4040";


export const apiGet = (path: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
 console.log(config);
  return axios.get(`${baseUrl}${path}`, config);
};

export const getAllAccounts = async(path: string) => {
  const response = await axios.get(path)
  const data = await response.data.accounts
  if (data) {
    return data
  } else {
    return "No data available"
  }
  

}

export const apiPost = (path: string, data: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  return axios.post(`${baseUrl}${path}`, data, config);
};


export const apiPatch = (path: string, data: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  return axios.patch(`${baseUrl}${path}`, data, config);
};
export const apiPut = (path: string, data: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  return axios.put(`${baseUrl}${path}`, data, config);
};


export const apiDelete = (path: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  return axios.delete(`${baseUrl}${path}`, config);
};
