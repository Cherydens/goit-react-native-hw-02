import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <LoginScreen /> */}
      <RegisterScreen />
      <StatusBar style="auto" />
    </>
  );
};
export default App;
