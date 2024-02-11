import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ScreenInicio } from '../screens/ScreenInicio';
import { ScreenDividir } from '../screens/ScreenDividir';


export type RootStackParamList={
    ScreenInicio:undefined,
    ScreenDividir:undefined,

    

}

const Stack = createStackNavigator<RootStackParamList>();




export const StackNavigator = () => {
  return (
    
    <Stack.Navigator  screenOptions={{
        cardStyle:{
            backgroundColor: 'black'
        }
    }}>
        <Stack.Screen name="ScreenInicio"  component={ScreenInicio} options={{headerShown:false}}/>
        <Stack.Screen name="ScreenDividir"  component={ScreenDividir} options={{headerShown:false}} />
       

    </Stack.Navigator>
    
  )
}