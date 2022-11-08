import React, {Component} from "react";

import {View,Text,SafeAreaView} from "react-native";
import Welcome from './Welcome';

export default class index extends Component {

    render() {
        return(
            <SafeAreaView>
                <Welcome />
            </SafeAreaView>
        )
    }

}