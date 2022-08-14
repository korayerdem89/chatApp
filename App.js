import Signup from './src/Auth/Signup/Signup';
import Login from './src/Auth/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  const AuthStack = () => {
    return (
          <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <AuthStack />
  );
}

