import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends Component {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=

    $ {longitude}&latitude=$ {latitude}&constellations=true&constellationlabels=

    true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&show
    date=false&showposition=false`

    constructor() {
        super();
        this.state = {
         latitude:'',
         longitude:'',
        }
    };
    render(){
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TextInput
                    style={style.inputStyle}
                    placeholder="digite sua latitude"
                    placeholderTextColor="white"
                    onChangeText={(text) => {
                        this.setState({
                            latitude:text
                        })
                    }}/>
                     <TextInput
                    style={style.inputStyle}
                    placeholder="digite sua longitude"
                    placeholderTextColor="white"
                    onChangeText={(text) => {
                        this.setState({
                            longitude:text
                        })
                    }}/>
                    <WebView
                    scalesPageToFit = {true}
                    source = {{ uri:path }}
                    style = {{ marginTop:20,marginBottom:20}}
                    />
                <Text>Tela do mapa estelar!</Text>
            </View>
        )
    }
