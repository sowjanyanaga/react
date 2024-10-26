import React, { useState, useEffect } from "react";
import { getColleges } from "./CollegeService"; // Adjust the path to your API function
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Linking,
} from "react-native";

interface College {
  id: number;
  name: string;
  location: string;
  googleMapsUri: string;
}

const AadharScanner = () => {
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const data = await getColleges(20, 0);
      const collegeData = data.map((college: any) => ({
        id: college.id,
        name: college.name,
        location: college.location,
        googleMapsUri: college.googlePlace.googleMapsUri,
      }));
      setColleges(collegeData);
      console.log(data.length, "data Sowjanyaa");
    } catch (err) {
      console.log(err);
    }
  };

  const handleMapPress = (uri: string) => {
    Linking.openURL(uri);
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Text>College List</Text>
      <FlatList
        data={colleges}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              gap: 20,
              marginBottom: 10,
              backgroundColor: "pink",
              margin: 10,
            //   marginTop:0
            }}
          >
            <Text>{item.location}</Text>
            <Text>{item.name}</Text>
            <Button
              title="Map"
              onPress={() => handleMapPress(item.googleMapsUri)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default AadharScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    width: "100%",
  },
});
