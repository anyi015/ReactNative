import React from 'react'
//iconos 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//vistas
import HomeScreen from './Screens/MainScreen/HomeScreen'
import AboutScreen from './Screens/MainScreen/AboutScreen'
import ListadoContactos from './Screens/MainScreen/Contactos/ListadoContactos'
import CrearContacto from './Screens/MainScreen/Contactos/CrearContacto';
import DetallesContacto from './Screens/MainScreen/Contactos/DetallesContacto'
import EditarContactos from './Screens/MainScreen/Contactos/EditarContactos';
//objeto de bottom-taps
const Tab = createBottomTabNavigator()

const ListadoStack = createNativeStackNavigator();

function ContactosStack() {
    return (
        <ListadoStack.Navigator
            initialRouteName='Contactos'
        >
            <ListadoStack.Screen
                name='Contactos'
                component={ListadoContactos}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            />
            <ListadoStack.Screen
                name='Detalles'
                component={DetallesContacto}
            />
            <ListadoStack.Screen
                name='Editar'
                component={EditarContactos}
            />
            <ListadoStack.Screen
                name='Crear'
                component={CrearContacto}
            />
        </ListadoStack.Navigator>
    )
}



function MyTaps() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'black'
            }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={30} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='About'
                component={CrearContacto}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="group-add" size={30} color="black" />
                    )
                }}
            />
             <Tab.Screen
                name='Listado'
                component={ContactosStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" size={30} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            
        </Tab.Navigator>
    )
}

export default function Navigator() {
    return (
        <NavigationContainer>
            <MyTaps></MyTaps>
        </NavigationContainer>
    )
}




