import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from "@react-navigation/native";
import Login from '../screens/Login';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Payment from '../screens/Payment';
import Confirm from '../screens/Confirm';
 

function HomeScreen(){
  return (
    <Home/>
  );
};


function SignUpScreen() {

  return (
      <Signin/>
  );
}
function LoginScreen() {
    return (
        <Login/>
    );
  }
function Payments() {
    return (
        <Payment/>
    );
  }
  function ConfirmScreen() {
    return (
        <Confirm/>
    );
  }

const Stack = createNativeStackNavigator();

function Navigation() {


  return (
   <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Payment" component={Payments} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />


      </Stack.Navigator>
    
   </NavigationContainer>
  );
}

export default Navigation;