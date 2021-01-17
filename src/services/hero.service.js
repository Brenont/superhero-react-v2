import { API_KEY, BASE_API, proxyurl } from "../config/api";

export const getHero = async (id) => {
  const reqUrl = `${BASE_API + API_KEY}/${id}`;

  const data = await fetch(proxyurl + reqUrl).then((res) =>
    res.json().then((response) => response)
  );

  return data;
};
