import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import {useNavigation} from '@react-navigation/native';

//import { db } from '../../Data/Firebase';
import { db } from '../../../Data/Firebase';

//estilos
import {estilos} from './Estilos';


export  function ListadoContactos() {
    const Navegacion = useNavigation()
    const [contactos, setContactos] = useState([]);
    const [cargando, setcargando] = useState(true);
    useEffect(() => {
      obtenerContactos();
    }, []);
  
  
    const obtenerContactos = async () => {
      try {
  
        const contactosRef = db.collection('Contactos');
        const snapshot = await contactosRef.get();
        const ContactosData = snapshot.docs.map((doc) => ({
          documentId: doc.id,
          ...doc.data()
        }
        ));
        console.log(ContactosData)
        setContactos(ContactosData);
        setcargando(false);
        
      } catch (error) {
        console.error('Error al obtener los contactos', error);
      }
    };
  
  
    const Listado = ({ item }) => (
  
      <View style={estilos.Contenedor}>
  
        <TouchableOpacity onPress={() => {
          console.log('Seleccionado ' + item.Nombre);
          Navegacion.navigate('Detalles', { Contacto: item });
        }}>
  
  
          <View style={estilos.Row}>
  
            <View>
              <Image
                source={{ uri: item.img }}
                style={estilos.PerfilImage}
              />
            </View>
  
            <View style={estilos.RayaVert}></View>
  
            <View style={estilos.infoContacto}>
              <Text style={estilos.NombreContacto}>{item.Nombre}</Text>
              <Text>{item.Tel}</Text>
              <Text>{item.Mail}</Text>
              
            </View>
          </View>
  
        </TouchableOpacity>
  
      </View>
  
    )
  
    return (
      <View>
        <FlatList
          data={contactos}
          keyExtractor={(contacto) => contacto.Tel}
          style={estilos.Lista}
          renderItem={Listado}
          ListEmptyComponent={<Text style={estilos.mensajeVacio}>No hay contactos para mostrar</Text>}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          refreshControl={
            <RefreshControl refreshing={cargando} onRefresh={obtenerContactos}/>
          }
        />
      </View>
    );
  
  }

  export default ListadoContactos