import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, Alert, Dimensions } from "react-native";
import AadharScanner from "./src/AadharScanner";

interface LocationData {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const { width, height } = Dimensions.get("window");

export default function App(): JSX.Element {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <View>
      <AadharScanner />
    </View>
    // <View>
    //   <View style={{ position: "absolute", top: 20, left: 20, right: 20 }}>
    //     <TextInput
    //       placeholder="Enter location"
    //       value={searchQuery}
    //       onChangeText={(text) => setSearchQuery(text)}
    //     />
    //     <Button title="Search" onPress={handleSearch} />
    //   </View>
    //   {location ? (
    //     <MapView
    //       style={{ height: height*0.72, marginTop: 250 }}
    //       initialRegion={{
    //         latitude: location.coords.latitude,
    //         longitude: location.coords.longitude,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       }}
    //     >
    //       <Marker coordinate={location.coords} />
    //     </MapView>
    //   ) : (
    //     <View style={{ justifyContent: "center", alignItems: "center" }}>
    //       {errorMsg ? <Text>{errorMsg}</Text> : <Text>Loading...</Text>}
    //     </View>
    //   )}

    //   {/* <View style={{ position: "absolute", top: 20, left: 20, right: 20 }}>
    //     <TextInput
    //       placeholder="Enter location"
    //       value={searchQuery}
    //       onChangeText={(text) => setSearchQuery(text)}
    //     />
    //     <Button title="Search" onPress={handleSearch} />
    //   </View> */}
    // </View>
  );
}

// import React, { useEffect, useState } from "react";
// import { StyleSheet, View, Text } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";

// interface LocationObject {
//   coords: {
//     latitude: number;
//     longitude: number;
//   };
// }

// const MapScreen = () => {
//   const [location, setLocation] = useState<LocationObject | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       try {
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location as LocationObject);
//       } catch (error) {
//         console.error("Error fetching location:", error);
//         setErrorMsg("Error fetching location");
//       }
//     })();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {location ? (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude,
//             }}
//             title="Your Location"
//           />
//         </MapView>
//       ) : (
//         <Text>{errorMsg || "Loading..."}</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;



