import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanageInitial() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../images/Logotipo.png')} />
            <Image source={require('../images/Ilustra02.png')}  />
            <View style={styles.textLocation}>
                <Text style={styles.cityText}>Salto,</Text>
                <Text style={styles.ufText}>São Paulo</Text>
            </View>
            <RectButton style={styles.buttonNext} onPress={() => navigation.navigate('OrphanagesMap')}>
                <Text style={styles.buttonNextText}>Acessar App</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2AB5D1',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 30
    },

    textLocation: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    cityText: {
        fontFamily: 'Nunito_700Bold',
        color: '#fff',
        fontSize: 22,
    },

    ufText: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#fff',
        fontSize: 22,
    },

    buttonNext: {
        width: '80%',
        height: 40,
        borderRadius: 12,
        backgroundColor: '#fcee6a'
    },

    buttonNextText: {
        textAlign: 'center',
        paddingVertical: 6,
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        color: '#fff'
    },
});