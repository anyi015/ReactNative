import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { db } from '../../../Data/Firebase';
import { estilos } from './Estilos';
import base64 from 'react-native-base64';

const ContactosForm = () => {
  const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/3177/3177440.png');
  const [mail, setMail] = useState('');
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [id, setId] = useState('');
  const [Guardado, setGuardado] = useState(false);

  const guardarEnFirebase = () => {

    setId(encryptNombre(nombre))

    console.log(id)

    const datos = {
      Img: img,
      Mail: mail,
      Nombre: nombre,
      Tel: tel,
      id:id,
    };

    db.collection('Contactos')
      .add(datos)
      .then(() => {
        setImg('')
        setMail('')
        setNombre('')
        setTel('')
        setId('')
        setGuardado(true)
        console.log('Datos guardados correctamente en Firestore');
        // Puedes restablecer los estados aquí si lo deseas
      })
      .catch((error) => {
        console.error('Error al guardar datos en Firestore:', error);
      });
  };

  const ocultarmensaje = () => {
    setGuardado(false);
  }

  const encryptNombre = (username) => {
    setNombre(username)
    setId(base64.encode(username))
  }
  
  return (
    <View style={estilos.ContenedorForm}>



      <TextInput
        placeholder="ID"
        value={id}
        style={estilos.FormInput}
        editable= {false}
      />
      <View style={{ height: 20 }}></View>
      <TextInput
        placeholder="URL de la imagen"
        value={img}
        onChangeText={setImg}
        style={estilos.FormInput}
      />
      <View style={{ height: 20 }}></View>
      <TextInput
        placeholder="Correo electrónico"
        value={mail}
        onChangeText={setMail}
        style={estilos.FormInput}
      />
      <View style={{ height: 20 }}></View>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={(texto)=>{
          encryptNombre(texto)
        }}
        style={estilos.FormInput}
      />
      <View style={{ height: 20 }}></View>
      <TextInput
        placeholder="Teléfono"
        value={tel}
        onChangeText={setTel}
        style={estilos.FormInput}
      />
      <View style={{ height: 20 }}></View>

      <TouchableOpacity
        style={estilos.botonGuardar}
        onPress={guardarEnFirebase}
      >
        <Text style={{ fontSize: 18 }}>
          Guardar
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }}></View>
      {
        Guardado
          ?
          <View style={estilos.MensajeOperacion}>
            <Text style={{fontSize: 18}}>Se Guardo el contacto</Text>
            <TouchableOpacity
             style={estilos.botonGuardado}
             onPress={ocultarmensaje}
            >
              <Text>
                OK
              </Text>
            </TouchableOpacity>
          </View>
          :
          <Text></Text>
      }
    </View>
  );
}

export default function CrearContacto() {


  return (
    <View>
      <ContactosForm></ContactosForm>
    </View>
  )
}
