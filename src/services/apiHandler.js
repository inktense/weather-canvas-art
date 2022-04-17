import axios from "axios";

async function getData(location) {
  const url = process.env.URL;
  const key = process.env.WEATHER_API_KEY;

  try {
    return await axios.get(url, {
      params: {
        key,
        q: location,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export { getData };
