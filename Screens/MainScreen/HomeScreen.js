import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={EstiloHome.margen}>
      <View style={EstiloHome.ContenedorHome}>
        <Text style={EstiloHome.Tutulo}>Pantalla de inicio</Text>
      </View>
      <View style={{ height: 20 }}></View>
      <View style={EstiloHome.ContenedorHome}>
        <Text style={EstiloHome.textoHome}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo metus eu sapien facilisis, sed congue nunc cursus. Sed nec nunc in quam sagittis consequat vel a dolor. Fusce vitae arcu vel quam cursus bibendum ac nec justo. Suspendisse potenti. Etiam dictum malesuada ex, nec laoreet ipsum dapibus eu. Suspendisse vel tincidunt arcu. Vestibulum tempus tellus sit amet libero volutpat hendrerit. Nullam nec ligula eu urna cursus suscipit. Sed in luctus velit. Sed nec nunc sit amet tortor auctor hendrerit in ut dolor. Phasellus eleifend eleifend augue, in rhoncus elit condimentum sed. Nulla facilisi. Nullam bibendum nunc a arcu cursus, a vehicula odio egestas. Vivamus finibus, dui in gravida dignissim, nisl ipsum dignissim augue, eu varius velit ligula nec dui. Suspendisse eleifend tincidunt arcu, eget varius mi elementum eu.
        </Text>
      </View>
    </View>
    )
  }
}

export default HomeScreen

const EstiloHome = StyleSheet.create({

  margen: {
    padding: 10
  },
  Tutulo: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: '20%'
  },
  ContenedorHome: {
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 10,
    // shadowColor: 'red',
    // shadowOffset: 10,
    // shadowRadius: 10,
    // shadowOpacity: 1,
  },

  textoHome: {
    fontSize: 20,
    textAlign: 'justify'
  }
})