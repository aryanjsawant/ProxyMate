import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubjectsScreen from './Screens/SubjectsScreen';
import ProxyScreen from './Screens/ProxyScreen';
import TimeTableScreen from './Screens/TimeTableScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TimeTable"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Subjects') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Proxy') {
              iconName = 'ios-list';
            } else if (route.name === 'TimeTable') {
              iconName = 'ios-calendar';
            }

            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#03346E',
          },
        })}
      >
        <Tab.Screen
          name="Subjects"
          options={{ headerShown: false }}
        >
          {() => <SubjectsScreen/>}
        </Tab.Screen>
        <Tab.Screen
          name="Proxy"
          options={{ headerShown: false }}
        >
          {() => <ProxyScreen/>}
        </Tab.Screen>
        <Tab.Screen
          name="TimeTable"
          options={{ headerShown: false }}
        >
          {() => <TimeTableScreen/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
