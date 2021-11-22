import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Title } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: "Galleta ritz",
    population: 10,
    color: "#009DAE",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Morochas",
    population: 10,
    color: "#71DFE7",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Yogurt 1L",
    population: 15,
    color: "#C2FFF9",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Vino",
    population: 20,
    color: "#FFE652",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Cigarro",
    population: 40,
    color: "#6166B3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

export default function TopProducts() {
  const width = Dimensions.get("window").width - 30;
  return (
    <View style={styles.container}>
      <Title>Producto más vendido</Title>
      <View style={styles.bg}>
        <View>
          <PieChart
            data={data}
            width={width}
            height={220}
            chartConfig={
              { 
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, 
              }
            }
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"12"} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#e5e5e5",
    flex: 1,
    paddingBottom: 10,
  },
  bg: {
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden", 
  },
});
