import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MasterHealthVault = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Master Health Vault</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MasterHealthVault' as never)}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#023047", // Match background with card
  },
  card: {
    flexDirection: "row",
    alignItems: "center", // Center items vertically
    justifyContent: "space-between",
    backgroundColor: "#023047",
    paddingHorizontal: 16,
    minHeight: 80, // Reduced height
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 18, // Reduced text size
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 5,
    borderRadius: 20,
    alignContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default MasterHealthVault;
