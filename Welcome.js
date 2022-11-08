import React, {Component} from "react";
import {Text, View} from "react-native";

import PropTypes from "prop-types"


export default class index extends Component {


    render() {
        const {name, age} = this.props;
        return(
           <View>
               <Text>
                   {name}---{age}
               </Text>
           </View>
        );
    }
}

index.propTypes = {
    name:PropTypes.string.isRequired, //array | bool | func | number | object | string | symbol | element | node
    age: PropTypes.number
}

index.defaulProps = {
    name: "veri gelmedi default olarak atandı",
    age: 156
}