import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreenOne from './WelcomeScreenOne';
import WelcomeScreenTwo from './WelcomeScreenTwo';
import HomeScreen from './HomeScreen';
import TourScreenOne from './TourScreenOne';
import TourScreenTwo from './TourScreenTwo';
import TourScreenThree from './TourScreenThree';
import MenuScreen from './MenuScreen';
import TreasureScreen from './TreasureScreen';
import { DefaultTheme } from '@react-navigation/native';
import colors from '../assets/Colors';
import LoginScreen from './Login';
import Signup from './Signup';
import VerifyAccountScreen from './VerifyAccountScreen';
import VerifySuccessScreen from './Verifyed';
import MyCasesScreen from './MyCasesScreen';

function AuthNavigation() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer theme={{
            ...DefaultTheme,
            colors:{
              ...DefaultTheme.colors,
              background: 'transparent',
              notification: colors.greenLight,
              
            },
            
          }}>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreenOne" component={WelcomeScreenOne} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                <Stack.Screen name="Verfiycode" component={VerifyAccountScreen} options={{headerShown: false}} />
                <Stack.Screen name="VerfiySuesss" component={VerifySuccessScreen} options={{headerShown: false}} />
                <Stack.Screen name="HomeScreen" component={MyCasesScreen} options={{headerShown: true}} />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} /> */}
                <Stack.Screen name="TourScreenOne" component={TourScreenOne} options={{headerTitleAlign: 'center', headerShadowVisible: false }} />
                <Stack.Screen name="TourScreenTwo" component={TourScreenTwo} options={{headerTitleAlign: 'center', headerShadowVisible: false }} />
                <Stack.Screen name="TourScreenThree" component={TourScreenThree} options={{headerTitleAlign: 'center', headerShadowVisible: false }} />
                <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false }} />
                <Stack.Screen name="TreasureScreen" component={TreasureScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AuthNavigation;
