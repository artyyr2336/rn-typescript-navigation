import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Navigation from '../../base/Navigation';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {screens} from '../consts/screens';

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//
//   if (!routeName) {
//     return true;
//   }
//
//   return hideOnScreens.indexOf(routeName) === -1;
// };

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          headerShown: false,
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
        }}
      />
    </Tab.Navigator>
  );
};
