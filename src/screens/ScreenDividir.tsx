import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { RootStackParamList } from '../navigator/StackNavigator';
import { Alert, Text, View } from 'react-native';
import { styles } from '../theme/themeApp';
import { InputComponent } from '../components/InputComponent';
import { TouchableComponent } from '../components/TouchableComponent';

interface ListaProps extends StackScreenProps<RootStackParamList, 'ScreenDividir'> {};

export const ScreenDividir = ({ navigation }: ListaProps) => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const HandleDividir = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (numero1 === 0 && numero2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (numero2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else if (!isNaN(numero1) && !isNaN(numero2)) {
      const resultado = numero1 / numero2;
      setResult(`La división es ${resultado}`);
    } else {
      setResult('Ingresa números válidos');
    }
  };

  return (
    <View style={styles.container}>
        <View>
      <Text style={styles.textInicio}>PANTALLA DIVISIÓN</Text>
      <InputComponent placerholder='Número 1' name='numero1' onChangeText={(text) => setNum1(text)} />
      <InputComponent placerholder='Número 2' name='numero2' onChangeText={(text) => setNum2(text)} />
      
      <View>
      <TouchableComponent title='Dividir' onPress={HandleDividir} />
      <Text style={styles.resultText}>{result}</Text>
      </View>

      </View>

        
      <TouchableComponent  title='Home' onPress={()=>{navigation.navigate('ScreenInicio')}}/>


    </View>

    
    

    
  );
};
