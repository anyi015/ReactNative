import React, { useState } from 'react'
import {Image, View, Text, TouchableOpacity} from 'react-native'
import { estilos } from './Estilos'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {db} from '../../../Data/Firebase'



export function DetallesContacto({route}) {

  const Navegador = useNavigation();

  const {Contacto} = route.params;

  const [EliminarUser, Set_EliminarUser] = useState(false); 

  const EliminarUserdb= ()=>{
    const Ref = db.collection('Contactos');
    const DocEliminar = Ref.doc(Contacto.documentID)
    DocEliminar.delete()
    .then(()=>{
      console.log("Eliminado con exito!")
      Navegador.navigate('Contactos')
    })
  }


  const ImagenUser= () =>{
    return (
      <View style={estilos.ImagenDetalles}>
        <Image
          source={{ uri: Contacto.img }}
          style={estilos.PerfilImage2}
        />
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>
          {Contacto.Nombre}
        </Text>
      </View>
    )
  }

  //funcion acciones

  const Acciones = () => {
    return (
      <View style={estilos.DetallesOpciones}>
        <View style={estilos.contenedorIconoOpciones}>
          <TouchableOpacity onPress={() => {
            console.log('Editar a ' + Contacto.Nombre)
            Navegador.navigate('Editar', {contactoEditar:Contacto})
            
          }} >
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={estilos.contenedorIconoOpciones}>
          <TouchableOpacity onPress={() => {
            console.log('Eliminar a ' + Contacto.Nombre);
            Set_EliminarUser(true);
          }} >
          <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const MensajeEliminacion = () =>{
    return(
      <View style={estilos.ContenedorDetalles}>
        <Text style={estilos.NombreContacto}>¿Seguro que quieres Eliminar a:
          {Contacto.Nombre} ?
        </Text>
        <View style={{height:30}}></View>
        <TouchableOpacity style={estilos.botonGuardar}
        onPress={() => {
          EliminarUserdb();
        }}
        >
          <Text>Eliminar</Text>
        </TouchableOpacity>


      </View>
    )
  }

  const Informacion = () => {
    return(
      <View style={estilos.ContenedorDetalles}>

        <Text style={estilos.NombreContacto}>
        Informacion de Contacto
        </Text>

        <View style={{ height: 20 }}></View>

        <Text style={{fontSize: 25}}>
        {/* <MaterialIcons name="call" size={30} color="black" /> */}
          <Text style={{fontWeight: 'bold'}}>Numero: </Text>
        {Contacto.Tel}
        </Text>

        <Text style={{fontSize: 25}}>
        <Text style={{fontWeight: 'bold'}}>Correo: </Text>
        {Contacto.Mail}
        </Text>
      </View>
    )
  }

  return (
      <View>
        <View style={{height:20}}></View>
        <ImagenUser></ImagenUser>
        <Acciones></Acciones>
        {
          EliminarUser
          ?
          <MensajeEliminacion></MensajeEliminacion>
          :
          <View></View>

        }
        <View style={estilos.RayaHorizontal}></View>
        <Informacion></Informacion>
      </View>
     
  )

  }

export default DetallesContacto