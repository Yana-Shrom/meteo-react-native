import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { getCityName, getWeatherData } from "./services/weatherApi";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import Loader from "./components/Loader";

export default function App() {
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const cityName = await getCityName(latitude, longitude);
      const weatherData = await getWeatherData(latitude, longitude);

      setCity(cityName);
      setCurrent(weatherData.current);
      setHourly(weatherData.hourly.slice(0, 40)); 
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <CurrentWeather city={city} data={current} />
      <ForecastList data={hourly} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1e90ff",
  },
});
