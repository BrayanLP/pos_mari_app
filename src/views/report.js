import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

import {
  TextInput,
  Title,
  Button,
  Snackbar,
  Banner,
  Appbar,
  Text,
  Drawer,
} from "react-native-paper";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function Report() {
  
  const width = Dimensions.get("window").width ; 

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
    // paddingBottom: 20,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
});
