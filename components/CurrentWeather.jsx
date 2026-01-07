import { View, Text, Image, StyleSheet } from "react-native";

export default function CurrentWeather({ city, data }) {
  if (!data) return null;

  const icon = data?.weather?.[0]?.icon;
  const tempText = typeof data?.temp === "number" ? `${Math.round(data.temp)}°C` : "--";
  const desc = data?.weather?.[0]?.description ?? "";

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      {icon ? (
        <Image
          style={styles.icon}
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }}
        />
      ) : null}
      <Text style={styles.temp}>{tempText}</Text>
      <Text style={styles.desc}>{desc}</Text>
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
