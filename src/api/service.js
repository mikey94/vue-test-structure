import axios from "axios";

const get = (url) => {
  const headerDefault = { contentType: "application/json" };
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      ...headerDefault,
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .catch((error) => error);
};

const get_axios = (url) => {
  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => error);
};

export { get, get_axios };
