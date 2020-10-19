import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number
}


export default function OrphanagesMap() {
    const navigation = useNavigation();
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useFocusEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    });

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate('OrphanageDetails', { id });
    }

    function handleNavigateToOrphanage() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{
                latitude: -23.2004545,
                longitude: - 47.2859361,
                latitudeDelta: 0.030,
                longitudeDelta: 0.030
            }}>
                {orphanages.map(orphanage => {
                    return (
                        <Marker key={orphanage.id} icon={mapMarker} coordinate={{
                            latitude: orphanage.latitude,
                            longitude: orphanage.longitude,
                        }}
                            calloutAnchor={{
                                x: 0.6,
                                y: -0.1
                            }}
                        >
                            <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                                <View style={styles.callOutContainer}>
                                    <Text style={styles.callOutText}>{orphanage.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToOrphanage}>
                    <Feather name="plus" size={20} color="#fff" />
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    callOutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    callOutText: {
        color: '#0089a5',
        fontFamily: 'Nunito_700Bold',
        fontSize: 14
    },

    footer: {
        position: 'absolute',
        left: 80,
        right: 24,
        bottom: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 46,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: .4,
        shadowRadius: 8,
        elevation: 4
    },

    footerText: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_700Bold'
    },

    createOrphanageButton: {
        width: 58,
        height: 46,
        backgroundColor: '#15c3d6',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
});