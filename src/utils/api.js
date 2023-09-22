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
  try {
    const urlWithParams = new URL(`${BASE_URL}/${resource}/`);
    const newQueryParams = {
      q: query,
      ...queryParams,
    };
    urlWithParams.search = new URLSearchParams(newQueryParams).toString();
    const response = await fetch(urlWithParams.toString(), options);
    if (!response.ok) {
      throw new Error("Couldn't fetch data.");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
