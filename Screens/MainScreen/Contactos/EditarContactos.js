import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { estilos } from './Estilos';
import { db } from '../../../Data/Firebase';
import base64 from 'react-native-base64';

export default function EditarContactos({ route }) {

  const { contactoEditar } = route.params;

  const ContactosForm = () => {
    const [img, setImg] = useState(contactoEditar.Img || 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png');
    const [mail, setMail] = useState(contactoEditar.Mail);
    const [nombre, setNombre] = useState(contactoEditar.Nombre);
    const [tel, setTel] = useState(contactoEditar.Tel);
    const [idContacto, setIdContacto] = useState(contactoEditar.id) //
    const [Guardado, setGuardado] = useState(false);

    const guardarEnFirebase = () => {
      const datosEditar = {
        Img: img,
        Mail: mail,
        Nombre: nombre,
        Tel: tel,
        id: idContacto //
      };

      const Ref = db.collection('Contactos');
      const DocEditar = Ref.doc(contactoEditar.documentId)

      DocEditar.update(datosEditar)
        .then(() => {
          setGuardado(true)
        })
        .catch((e) => {
          console.log(e)
        })


      db.collection('Contactos')
        .add(datosEditar)
        .then(() => {
          setImg('')
          setMail('')
          setNombre('')
          setTel('')
          setIdContacto('')
          setGuardado(true)
          console.log('Datos editados guardados correctamente en Firestore');
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
    setIdContacto(base64.encode(username))
  }

    return (
      <View style={estilos.ContenedorForm}>


        <TextInput
          placeholder="ID"
          value={idContacto}
          editable={false}
          style={estilos.FormInput}
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
          onChangeText={(texto) =>{
            encryptNombre(texto)
           }}
          style={estilos.FormInput}
        />
        <View style={{ height: 20 }}></View>
        <TextInput
          placeholder="Teléfono"
          value={tel ?? ''}
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
              <Text style={{ fontSize: 18 }}>Se Guardo el contacto</Text>
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

  return (
    <View>
      <ContactosForm></ContactosForm>
    </View>
  )
}