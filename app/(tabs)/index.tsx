import React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import ServiceItem from "../../components/ServiceItem";

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
      </View>
      <ServiceItem
        title="Ride"
        description="Request a ride"
        icon={require("../../assets/images/icon.png")}
      />
      <ServiceItem
        title="Package"
        description="Send a package"
        icon={require("../../assets/images/icon.png")}
      />
      <ServiceItem
        title="Rent"
        description="Rent a car"
        icon={require("../../assets/images/icon.png")}
      />
      <ServiceItem
        title="Reserve"
        description="Reserve a ride"
        icon={require("../../assets/images/icon.png")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
