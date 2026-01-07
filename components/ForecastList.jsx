import { FlatList } from "react-native";
import ForecastItem from "./ForecastItem";

export default function ForecastList({ data }) {
  const filteredData = data.filter((_, index) => index % 3 === 0);

  return (
    <FlatList
      horizontal
      data={filteredData}
      keyExtractor={(item) => item.dt.toString()}
      renderItem={({ item }) => <ForecastItem item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
}
