const API_KEY = "4a559d3ed3b12d7562d4b83c7189a13c";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API Erreur: ${res.status} ${res.statusText} ${text}`);
  }
  return res.json();
}

export const getCityName = async (lat, lon) => {
  const data = await fetchJson(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
  );
  return data[0]?.name ?? null;
};

export const getWeatherData = async (lat, lon) => {
  return fetchJson(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
  );
};

