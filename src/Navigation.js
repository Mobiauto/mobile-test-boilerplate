import { createStackNavigator, createAppContainer } from "react-navigation";

import colors from "./constants/colors";

import Home from "./screens/HomeScreen";
import Marcas from "./screens/Marcas";
import Modelos from "./screens/Modelos";
import Anos from "./screens/Anos";
import Detalhes from "./screens/Detalhes";

const AppNavigator = createStackNavigator(
  {
    Home,
    Marcas,
    Modelos,
    Anos,
    Detalhes,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: colors.primary.medium,
      headerBackTitle: null,
    }
  }
);

export default createAppContainer(AppNavigator);
