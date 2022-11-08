import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React, {Component} from "react";

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";

import {createBottomTabNavigator} from "react-navigation-tabs";
import DevAppContainer from "expo/build/environment/DevAppContainer";
import {createDrawerNavigator} from "react-navigation-drawer";


class AppOld extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Text>HOME PAGE</Text>
            <TouchableOpacity style={{padding:8 ,backgroundColor:'pink',borderRadius:8}} onPress={() => this.props.navigation.navigate('Detail')}>
              <Text>Detay sayfasına git</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding:8 ,backgroundColor:'orange',borderRadius:8}} onPress={() => this.props.navigation.openDrawer()}>
              <Text>Açılır menüye git</Text>
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

class Drawer extends Component {
  render() {
    return(
        <View style={styles.container}>
          <Text>DRAWER PAGE</Text>
        </View>
    )
  }
}


const HomeStack = createStackNavigator({
  Home:{screen:AppOld}
});

const DetailStack = createStackNavigator({
  Detail: {screen:Detail}
})

const DrawerStack = createDrawerNavigator({
  Drawer: {screen:Drawer}
})

const AppNavigator = createDrawerNavigator({
  Home:{
    screen: HomeStack
  },
  Detail: {
    screen: DetailStack
  },
  Drawer: {
    screen: DrawerStack
  }
});



export default createAppContainer(AppNavigator);

//BOTTOM TAB NAVIGATOR *******************
/*const AppNavigator = createBottomTabNavigator({
  /*Home: {
    screen: AppOld
  },
  Detail: {
    screen: Detail
  }
  //ya da

  Home: HomeStack,
  Detail: DetailStack
})*/

//STACK NAVIGATOR ***********
/*const AppNavigator = createStackNavigator({
  Home: {
    screen: AppOld
  },
  Detail: {
    screen: Detail
  }
}, {
    initialRouteName: 'Home' //başlangıçta hangi sayfa gözüksün
});*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
