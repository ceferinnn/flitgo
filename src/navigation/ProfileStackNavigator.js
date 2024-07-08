import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditarPerfilScreen from '../screens/profile/EditarPerfilScreen';
const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    header: () => (
                        <Header
                            headerModel="Model3"
                            title="Mi Perfil"
                            button="edit"
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="EditarPerfil"
                component={EditarPerfilScreen}
                options={({ navigation }) => ({
                    header: () => (
                        <Header
                            headerModel="Model3"
                            title="Editar Perfil"
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default ProfileStackNavigator;
