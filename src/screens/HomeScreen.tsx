// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen: React.FC = () => {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      getLocation();
    }
  }, []);

  const requestLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'We need your location to display it on the map.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getLocation();
    } else {
      console.log('Location permission denied');
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position: { coords: any; }) => {
        setLocation(position.coords);
        console.log(position.coords);
      },
      (error: any) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      {location ? (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      ) : (
        <Text>Loading location...</Text>
      )}
      <Button title="Start Video Stream" onPress={() => console.log('Start Video Stream')} />
    </View>
  );
};

export default HomeScreen;
