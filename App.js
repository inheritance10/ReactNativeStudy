import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React, {Component} from "react";

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";


class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Text>HOME PAGE</Text>
            <TouchableOpacity style={{padding:8 ,backgroundColor:'pink',borderRadius:8}} onPress={() => this.props.navigation.navigate('Detail')}>
              <Text>Detay sayfasına git</Text>
            </TouchableOpacity>
          </View>
    );
  }
}

class Detail extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>DETAIL PAGE</Text>
        </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Detail: {
    screen: Detail
  }
}, {
    initialRouteName: 'Home' //başlangıçta hangi sayfa gözüksün
});



export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
