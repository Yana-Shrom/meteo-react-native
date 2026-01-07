import { View, Text, Image, StyleSheet } from "react-native";

export default function ForecastItem({ item }) {
  if (!item) return null;

  const dt = item.dt ?? item?.time ?? null;
  const date = dt ? new Date(dt * 1000).toLocaleString("fr-FR", {
    day: "2-digit",
    hour: "2-digit",
  }) : "";

  const icon = item?.weather?.[0]?.icon;
  const tempValue = typeof item?.temp === "number" ? item.temp : item?.temp?.day;
  const tempText = typeof tempValue === "number" ? `${Math.round(tempValue)}°C` : "--";

  return (
    <View style={styles.card}>
      <Text>{date}</Text>
      {icon ? (
        <Image
          style={styles.icon}
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
        />
      ) : null}
      <Text>{tempText}</Text>
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
