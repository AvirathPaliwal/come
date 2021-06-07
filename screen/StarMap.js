import React,{Component} from 'react'
import {
    Text,
    Alert,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image,
    ImageBackground,
} from 'react-native';

import {WebView} from 'react-native-webview'
export default class StarMapScreen extends Component{
    constructor() {
        super();
        this.state = {
            longitude:{},
            latitude:{}
        }
    }
    render(){
        const {longitude,latitude}=this.state;
        const Path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;'
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/star_map.gif')} style={styles.backgroundimage}>
                <WebView 
                  scalesPageToFit={true}
                  source={{url:Path}}
                  style={{marginTop:50,marginBottom:80}}
                 />
            <View style={styles.titleBar}>
               <Text style={styles.titleText}>StarMap</Text>
            </View>
            </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 27,
        color: 'cyan',
        fontWeight: "bold",
        marginTop:27
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover'
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: '100%',
        height: '100%'
    }
})