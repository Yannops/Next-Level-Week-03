import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import Header from './components/Header';
import OrphanageInitial from './pages/OrphanageInitial';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="OrphanageInitial" component={OrphanageInitial} />
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
                <Screen name="OrphanageDetails" component={OrphanageDetails} options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} title="Detalhes do Orfanato"/>
                }} />
                <Screen name="SelectMapPosition" component={SelectMapPosition} options={{
                    headerShown: true,
                    header: () => <Header title="Selecione o local" />
                }} />
                <Screen name="OrphanageData" component={OrphanageData} options={{
                    headerShown: true,
                    header: () => <Header title="Formulário de cadastro" />
                }} />
            </Navigator>
        </NavigationContainer>
    );
}