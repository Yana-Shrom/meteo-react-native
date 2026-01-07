const API_KEY = "4a559d3ed3b12d7562d4b83c7189a13c";

export const getCityName = async (lat, lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
  );
  const data = await res.json();
  return data[0]?.name;
};

export const getWeatherData = async (lat, lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
  );
  return res.json();
};

