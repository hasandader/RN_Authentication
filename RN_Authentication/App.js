import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/screens/Home/Home';
import SignUpScreen from './src/screens/SignUp/SignUp';
import LoginScreen from './src/screens/Login/Login';

//Register screens

Navigation.registerComponent("display-screens.HomeScreen",
() => HomeScreen
);

Navigation.registerComponent("display-screens.SignUpScreen",
() => SignUpScreen
);

Navigation.registerComponent("display-screens.LoginScreen",
() => LoginScreen
);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "display-screens.SignUpScreen",
    title: "Sign Up"
  }
  });
