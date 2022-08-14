import Signup from './src/Auth/Signup/Signup';
import Login from './src/Auth/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
  }
  return (
    <Signup />
  );
}

