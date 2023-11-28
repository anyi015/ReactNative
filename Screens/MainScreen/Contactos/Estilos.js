import { StyleSheet } from "react-native";



export const estilos = StyleSheet.create({

  // Cajita color verde claro
    Contenedor: {
      backgroundColor: 'lightgreen',
      margin: 5,
      padding: 10,
      borderRadius: 10,
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',

    },
  
    // Una rayita delgada color negro 
    RayaVert: {
      backgroundColor: 'orange',
      height: 80,
      width: 2,
      marginLeft: 20
    },
  
    // contenedor que tiene los datos del contacto 
    infoContacto: {
      paddingLeft: '10%',
      width: '50%',
    },
  
    // Estilo que se aplica al titulo del contacto
    NombreContacto: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    
    // Imagen redondeada de perfil
    PerfilImage: {
      height: 90,
      width: 90,
      borderRadius: 90,
    },
  
    // Estilo para acomodar elementos de manera horizontal
    Row: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    // Estilp para cuando no hay datos del contacto 
    mensajeVacio: {
      fontSize: 30,
      marginLeft: '14%',
      marginTop: '80%', 
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: 'green',
    },

    ContenedorBoton: {
    //  backgroundColor: 'red',
     paddingLeft: '15%',
    },

////////////////////////////////////////////

    //VISTA DETALLES 
    
    // Imagen redondeada de la vista detalles
    PerfilImage2: {
      height: 200,
      width: 200,
      borderRadius: 100,
    },
    
    ContenedorDetalles: {
      backgroundColor: 'lightgreen',
      margin: 5,
      padding: 10,
      borderRadius: 10,
    },
    
    //contenedor de la imagen de detalles
    ImagenDetalles: {
      // backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
      margin: 10,
    },
    
    RayaHorizontal: {
      backgroundColor: 'orange', 
      width: '100%', 
      height: 5,
      marginTop: 10
    },
      
      DetallesOpciones: {
        // backgroundColor: 'lightgreen', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }, 
      
      contenedorIconoOpciones: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 80,
        marginLeft: 60,
        marginRight: 60
        
      },

      ////////////////////////////////////////////
      
      //VISTA CREAR CONTACTO 
      
      ContenedorForm: {
        backgroundColor: 'lightgreen',
        padding: 10,
        margin: 10,
        borderRadius: 10
      },

      FormInput: {
        backgroundColor: 'white',
        // height: 50,
        padding: 20,
        borderRadius: 20

      }, 

      botonGuardar: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 80,
        borderRadius: 20,
        marginLeft: '40%'
      },
      botonGuardado: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 80,
        borderRadius: 20,
        marginLeft: '2%'
      },

      MensajeOperacion: { 
        justifyContent: 'center',
        alignItems: 'center',
      }

    });