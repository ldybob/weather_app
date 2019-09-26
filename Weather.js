import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#6D6027", "#D3CBB8"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["", ""],
        title: "Thunderstorm",
        subtitle: "You will die"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Drizzle",
        subtitle: "Cozy in home"
    },
    Rain: {
        iconName: "weather-lightning-rainy",
        gradient: ["#43C6AC", "#191654"],
        title: "Rain",
        subtitle: "Wet"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#abbaab", "#ffffff"],
        title: "Snow",
        subtitle: "Let's go boarding"
    },
    clear: {
        iconName: "weather-sunny",
        gradient: ["", ""],
        title: "clear",
        subtitle: "Sunny day"
    },
    clouds: {
        iconName: "weather-cloudy",
        gradient: ["", ""],
        title: "clouds",
        subtitle: "Depress"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "Mist",
        subtitle: ""
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "Dust",
        subtitle: ""
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"/>
                <Text style={styles.temp}>
                    {temp}º
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf([
            "Thunderstorm",
            "Drizzle",
            "Rain",
            "Snow",
            "Atmosphere",
            "clear",
            "clouds",
            "Haze",
            "Mist",
            "Dust"
        ])
        .isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 44,
        fontWeight: "300",
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});