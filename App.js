import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "d999da016718423e58c763a7e88a7d5d";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {
          temp
        },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, condition: weather[0].main, temp });
  }

  getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        const {
          coords: {
            latitude,
            longitude
          }
        } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        console.log(latitude, longitude);
        // Send to API and get weather
        this.getWeather(latitude, longitude);
        // this.setState({ isLoading: false });
      } else {
        Alert.alert("Permission does not granted", "So sad");
      }
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading
      ? <Loading />
      : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
