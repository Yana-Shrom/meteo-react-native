import { View, Text, Image, StyleSheet } from "react-native";

export default function ForecastItem({ item }) {
  const date = new Date(item.dt * 1000).toLocaleString("fr-FR", {
    day: "2-digit",
    hour: "2-digit",
  });

  return (
    <View style={styles.card}>
      <Text>{date}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }}
      />
      <Text>{Math.round(item.temp)}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    width: 120,
  },
  icon: { width: 50, height: 50 },
});
