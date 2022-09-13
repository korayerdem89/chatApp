import { LogBox } from 'react-native'
import Signup from './src/Pages/Auth/Signup/Signup';
import Login from './src/Pages/Auth/Login/Login';
import Rooms from './src/Pages/Rooms';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import COLORS from './src/assets/colors';
const Stack = createStackNavigator();


const ignoreWarns = [
  "AsyncStorage has been extracted from react-native core and will be removed"];

LogBox.ignoreLogs(ignoreWarns);

export default function App() {
  // const AuthStack = () => {
  //   return (
  //         <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="Login" component={Login} />
  //       <Stack.Screen name="Signup" component={Signup} />
  //     </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
  const MainPages = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator     screenOptions={() => ({
        headerTintColor: COLORS.medium_orange,
        headerStyle: {
          height: 80,
        },
      })}>
          <Stack.Screen name="Odalar" component = {Rooms} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    // <AuthStack />
    <MainPages />
  );
}

