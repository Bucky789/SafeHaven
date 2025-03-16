// src/screens/ParentScreen.tsx
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

type ParentScreenProps = {
  route: {
    params: {
      latitude: number;
      longitude: number;
    };
  };
};

const ParentScreen: React.FC<ParentScreenProps> = ({ route }) => {
  const { latitude, longitude } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>Parent Safety App</Text>
      <Text style={{ fontSize: 16, marginTop: 20 }}>
        Child's Location: {latitude}, {longitude}
      </Text>
      
      <View style={{ flex: 1, marginTop: 20 }}>
        <RNCamera
          style={{ flex: 1, width: '100%' }}
          type={RNCamera.Constants.Type.front}
          captureAudio={true}
          onCameraReady={() => console.log('Camera ready')}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Live Video Stream</Text>
          </View>
        </RNCamera>
      </View>
    </SafeAreaView>
  );
};

export default ParentScreen;
