import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg3.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Memory Game</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Facil")
                    }>
                        <Text style={styles.routeText}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard2} onPress={() =>
                        this.props.navigation.navigate("Intermedio")
                    }>
                        <Text style={styles.routeText}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard3} onPress={() =>
                        this.props.navigation.navigate("Avanzado")
                    }>
                        <Text style={styles.routeText}>Advanced</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard4} onPress={() =>
                        this.props.navigation.navigate("Como_Jugar")
                    }>
                        <Text style={styles.knowMore}>How to Play</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: 'green'
    },
    routeCard2: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 25,
        borderRadius: 20,
        backgroundColor: 'yellow'
    },
    routeCard3: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 25,
        borderRadius: 20,
        backgroundColor: 'red'
    },
    routeCard4: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 25,
        borderRadius: 20,
        backgroundColor: 'purple'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        fontFamily:"Bradley_Hand_ITC"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 30,
        paddingLeft: 30,
        fontFamily:"Agency_FB"
    },
    knowMore: {
        paddingLeft: 30,
        color: "black",
        fontSize: 25,
        marginTop:35,
        fontFamily:"Calibri_Ligth"
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});
