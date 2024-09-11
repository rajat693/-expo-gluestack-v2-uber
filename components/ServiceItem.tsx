import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type ServiceItemProps = {
  title: string;
  description: string;
  icon: any;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default ServiceItem;
