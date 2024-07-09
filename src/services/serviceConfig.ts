import axios from "axios";

const baseURL = "http://localhost:3000";

const myService = axios.create({
  baseURL,
  withCredentials: true,
});

export const login = async (userInfo: any) => {
  console.log(userInfo, "akl menos dime que se manda a llamar");
  const response = await myService.post(`${baseURL}/login`, {
    ...userInfo,
  });

  console.log(response, "akl menos dime que se manda a llamar");
  return response.data;
};
