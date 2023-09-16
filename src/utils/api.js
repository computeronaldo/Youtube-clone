const BASE_URL = "https://youtube138.p.rapidapi.com";

const queryParams = {
  hl: "en",
  gl: "US",
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromAPI = async (resource, query) => {
  const urlWithParams = new URL(`${BASE_URL}/${resource}/`);
  const newQueryParams = {
    q: query,
    ...queryParams,
  };
  urlWithParams.search = new URLSearchParams(newQueryParams).toString();

  const { data } = await fetch(urlWithParams.toString(), options);
  return data;
};
