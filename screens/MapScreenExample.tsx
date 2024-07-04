import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {YaMap} from 'react-native-yamap';

const initialRegion = {
  lat: 40.714627,
  lon: -74.002863,
  zoom: 16,
};

const MapScreenExample = () => {
  const map = useRef<YaMap>(null);

  return (
    <View style={styles.container}>
      <YaMap
        ref={map}
        style={styles.container}
        showUserPosition={false}
        followUser={true}
        tiltGesturesEnabled={true}
        initialRegion={initialRegion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapScreenExample;
