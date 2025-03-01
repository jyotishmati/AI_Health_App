import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const bloodGroups = ["A +ve", "A -ve", "B +ve", "B -ve", "O +ve", "O -ve"];
const bloodBanks = [
  {
    id: "1",
    name: "Grace Blood Bank",
    location: "Ganganagar, Bengaluru, Karnataka 560032",
    distance: "4.5 km/45min",
    image: require("../../../assets/images/WHO.jpg"),
  },
  {
    id: "2",
    name: "Grace Blood Bank",
    location: "Ganganagar, Bengaluru, Karnataka 560032",
    distance: "4.5 km/45min",
    image: require("../../../assets/images/WHO.jpg"),
  },
];

const BloodBankScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
        <Ionicons name="arrow-back" size={24} color="#0C3C5F" style={{ marginRight: 10 }} />
        <Text style={{ color: "#0C3C5F", fontSize: 18, fontWeight: "bold" }}>Blood Bank</Text>
      </View>

      {/* Search Bar */}
      <View style={{ backgroundColor: "#0C3C5F", padding: 16 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            height: 40,
          }}
        >
          <FontAwesome name="search" size={18} color="gray" style={{ marginRight: 8 }} />
          <TextInput placeholder="Search Blood Center" style={{ flex: 1, fontSize: 16 }} />
        </View>
      </View>

      {/* Blood Groups */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10, paddingLeft: 10 }}
      >
        {bloodGroups.map((group, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 6,
              marginHorizontal: 6,
              borderWidth: 1,
              borderColor: "#0C3C5F",
              justifyContent: "center",
              alignItems: "center",
              height: 35,
            }}
          >
            <Text style={{ color: "#0C3C5F", fontWeight: "bold", fontSize: 14 }}>{group}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* User Info Card */}
      <View
        style={{
          backgroundColor: "#0C3C5F",
          marginHorizontal: 16,
          borderRadius: 10,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Ravi Kumar H</Text>
          <Text style={{ color: "white", fontSize: 14 }}>Jayanagar, Bengaluru, India</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16, marginRight: 6 }}>
            B +ve
          </Text>
          <Ionicons name="water" size={20} color="white" />
        </View>
      </View>

      {/* Blood Bank List */}
      <FlatList
        data={bloodBanks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 16,
              marginBottom: 10,
              paddingBottom: 10,
              elevation: 3,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: 150,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View style={{ padding: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 4 }}>
                <Ionicons name="location" size={16} color="gray" />
                <Text style={{ marginLeft: 4, color: "gray" }}>{item.location}</Text>
              </View>
              {/* Horizontal Line */}
              <View style={{ height: 1, backgroundColor: "#E0E0E0", marginVertical: 8 }} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="navigate" size={16} color="gray" />
                <Text style={{ marginLeft: 4, color: "gray" }}>{item.distance}</Text>
                <Ionicons name="medkit" size={16} color="gray" style={{ marginLeft: 10 }} />
                <Text style={{ marginLeft: 4, color: "gray" }}>Hospital</Text>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#D1D5DB",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ width: 150, height: 5, backgroundColor: "#6B7280", borderRadius: 10 }} />
          </View>
        }
      />
    </View>
  );
};

export default BloodBankScreen;
