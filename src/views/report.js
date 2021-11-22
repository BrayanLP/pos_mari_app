import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {  Title  } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";

export default function Report() {  
  const width = Dimensions.get("window").width; 

  return (
    <View style={styles.container}>
      <Title>Últimos 6 meses</Title>
      <View style={styles.bg}> 
        <View>
          <LineChart
            data={{
              labels: ["Jul", "Jun", "Ago", "Set", "Oc", "Nov"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            chartConfig={{
              backgroundColor: "#009DAE",
              backgroundGradientFrom: "#009DAE",
              backgroundGradientTo: "#009DAE",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#009DAE",
              },
            }}
            width={width}
            height={220}
            yAxisLabel="S/"
            yAxisSuffix="k"
            yAxisInterval={1} 
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
