import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: () => ({
      title: 'Home',
    }),
    initialRouteName: 'HomeScreen',
  },
);

export default createAppContainer(RootStack);
