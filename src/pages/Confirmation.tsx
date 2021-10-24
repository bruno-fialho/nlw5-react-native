import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { 
  SafeAreaView, 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'> & {
  name: string;
};

export function Confirmation({ navigation }: Props) {
  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return ( 
    <SafeAreaView style={styles.container}>
        <View style={styles.content} >
          <Text style={styles.emoji}>
            😄
          </Text> 

          <Text style={styles.title}>
            Prontinho
          </Text>

          <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </Text>

          <View style={styles.footer}>
            <Button text="Começar" onPress={handleMoveOn} />
          </View>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})
// 1:15:37