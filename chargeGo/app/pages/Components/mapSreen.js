import React from "react";
import { StyleSheet, View, Image, Animated, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CardBottom from "./cardBottom";
import { useState } from "react";
const MapScreen = () => {
  const initialRegion = {
    latitude: 41.10912,
    longitude: 28.87144,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    {
      coordinate: { latitude: 41.10912, longitude: 28.87144 },

      image: require("../../../assets/images/orangeMarker.png"), // Path to your custom image
    },
    {
      coordinate: { latitude: 41.10488, longitude: 28.87693 },

      image: require("../../../assets/images/purpleMarker.png"), // Path to your custom image
    },
  ];
  // banner data end
  // bottom cart Data start
  const [bottomPosition] = useState(new Animated.Value(15));

  const animateBottom = () => {
    const toValue = bottomPosition._value === 15 ? -700 : 15;
    Animated.timing(bottomPosition, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const renderBottom = ({ item }) => {
    return <CardBottom />;
  };
  // bottom cart Data end
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={animateBottom} // Trigger animation on marker press
          >
            <View style={styles.markerContainer}>
              <Image source={marker.image} style={styles.markerImage} />
            </View>
          </Marker>
        ))}
      </MapView>
      <Animated.View
        style={{
          width: "100%",
          position: "absolute",
          bottom: -700,
          zIndex: 10,
          paddingBottom: 25,
          transform: [{ translateY: bottomPosition }],
        }}
      >
        <FlatList
          data={cardData}
          renderItem={renderBottom}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        />
      </Animated.View>
    </View>
  );
};

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#523735",
      },
    ],
  },
  // Add more custom style elements as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    width: 50,
    height: 50,
  },
  markerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default MapScreen;
