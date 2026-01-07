import { View, Text, Image, StyleSheet } from "react-native";

export default function CurrentWeather({ city, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        }}
      />
      <Text style={styles.temp}>{Math.round(data.temp)}°C</Text>
      <Text style={styles.desc}>
        {data.weather[0].description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  city: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  temp: { fontSize: 48, color: "#fff" },
  desc: { fontSize: 18, color: "#fff", textTransform: "capitalize" },
  icon: { width: 150, height: 150 },
});
