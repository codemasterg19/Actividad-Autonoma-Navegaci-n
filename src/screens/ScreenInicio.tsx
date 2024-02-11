import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/themeApp'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { TouchableComponent } from '../components/TouchableComponent'


interface ListaProps extends StackScreenProps<RootStackParamList,'ScreenInicio'>{};


export const ScreenInicio = ({ navigation}: ListaProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textInicio}>BIENVENIDO</Text>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_LLLrGY-yeMW4WF_X4na00jVD6QOZGIE_A&usqp=CAU'}}
        style={styles.image}
        />
        <TouchableComponent title='Acceder' onPress={()=> navigation.navigate('ScreenDividir')} />

    </View>
  )
}
