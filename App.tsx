import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Expenses from './screens/Expenses';
// import Settings from './screens/Settings';
// import Reports from './screens/Reports';
// import Add from './screens/Add';
import { Expenses, Settings, Reports, Add } from './screens';
import { theme } from './theme';
import { TabBarIcon } from './components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          }
        }}
      >
        <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="expenses" /> }} name="Expenses" component={Expenses} />
        <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="reports" /> }} name="Reports" component={Reports} />
        <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="add" /> }} name="Add" component={Add} />
        <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="settings" /> }} name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}