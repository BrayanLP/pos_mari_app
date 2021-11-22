import React from "react";
import {
  DefaultTheme, 
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/views/root";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import * as models from "./src/models";

const store = init({
  models,
  plugins: []
});


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0081CA",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <StatusBar style="auto" /> */}
        <Provider store={store}>
          <Root></Root>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
