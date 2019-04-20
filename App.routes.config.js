import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// All screens are imported here (routes)
import HomeScreen from "./src/Containers/HomeScreen.component";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
      initialRouteName: "Home"
  }
);

export default (AppContainer = createAppContainer(AppNavigator));