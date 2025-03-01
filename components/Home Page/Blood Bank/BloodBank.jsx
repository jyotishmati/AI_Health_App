import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const BloodBankCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blood Bank</Text>
        <TouchableOpacity style={styles.expandIcon} onPress={() => navigation.navigate("ExpandBB")}>
          <FontAwesome name="expand" size={14} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.card}>
        {/* Left - Image */}
        <Image
          source={require("../../../assets/images/bloodbank.jpg")} 
          style={styles.image}
        />

        {/* Right - Details */}
        <View style={styles.details}>
          <Text style={styles.title}>
            Emergency <Text style={styles.bold}>B+ Blood Needed</Text>
          </Text>

          <View style={styles.infoRow}>
            <MaterialIcons name="location-on" size={16} color="#6B7280" />
            <Text style={styles.infoText}>MS Ramaiah Hospital</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="event" size={16} color="#6B7280" />
            <Text style={styles.infoText}>08 Nov 2023</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="schedule" size={16} color="#6B7280" />
            <Text style={styles.infoText}>02:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E3A5F",
  },
  expandIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0E3A5F",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 120,
    height: 132,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#1F2937",
  },
  bold: {
    fontWeight: "bold",
    color: "#1F2937",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  infoText: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#0E3A5F",
    width: 35,
  },
});

export default BloodBankCard;




// import React from "react";
// import { View, Text, TextInput, ScrollView, Image, StyleSheet } from "react-native";
// import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// const BloodBankScreen = () => {
//   const bloodCenters = [
//     {
//       name: "Grace Blood Bank",
//       location: "Ganganagar, Bengaluru, Karnataka 560032",
//       distance: "4.5 km / 45min",
//     },
//     {
//       name: "Grace Blood Bank",
//       location: "Ganganagar, Bengaluru, Karnataka 560032",
//       distance: "4.5 km / 45min",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} color="black" />
//         <Text style={styles.headerTitle}>Blood Bank</Text>
//       </View>
      
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
//         <TextInput placeholder="Search Blood Center" placeholderTextColor="#fff" style={styles.searchInput} />
//       </View>
      
//       {/* Blood Groups */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bloodGroupsContainer}>
//         {['A +ve', 'A -ve', 'B +ve', 'B -ve', 'O +ve', 'O -ve'].map((group, index) => (
//           <View key={index} style={styles.bloodGroup}><Text style={styles.bloodGroupText}>{group}</Text></View>
//         ))}
//       </ScrollView>
      
//       {/* User Info */}
//       <View style={styles.userCard}>
//         <Text style={styles.userName}>Ravi Kumar H</Text>
//         <Text style={styles.userBloodType}>B +ve</Text>
//         <MaterialCommunityIcons name="water" size={20} color="white" style={styles.dropIcon} />
//         <Text style={styles.userLocation}>Jayanagar, Bengaluru, India</Text>
//       </View>
      
//       {/* Blood Centers */}
//       <ScrollView style={styles.centerList}>
//         {bloodCenters.map((center, index) => (
//           <View key={index} style={styles.centerCard}>
//             <Image source={require("../../../assets/images/WHO.jpg")} style={styles.centerImage} />
//             <View style={styles.centerInfo}>
//               <Text style={styles.centerName}>{center.name}</Text>
//               <Text style={styles.centerLocation}>{center.location}</Text>
//               <Text style={styles.centerDistance}>{center.distance}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f8f9fa" },
//   header: { flexDirection: "row", alignItems: "center", padding: 15, backgroundColor: "#fff" },
//   headerTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 10 },
//   searchContainer: { flexDirection: "row", backgroundColor: "#003b49", padding: 10, alignItems: "center" },
//   searchIcon: { marginRight: 10 },
//   searchInput: { flex: 1, color: "#fff", fontSize: 16 },
//   bloodGroupsContainer: { paddingHorizontal: 10, marginTop: 10 },
//   bloodGroup: { backgroundColor: "#fff", paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, marginHorizontal: 5 },
//   bloodGroupText: { fontSize: 14, fontWeight: "bold" },
//   userCard: { backgroundColor: "#003b49", padding: 15, margin: 10, borderRadius: 10, position: "relative" },
//   userName: { color: "#fff", fontSize: 16, fontWeight: "bold" },
//   userBloodType: { color: "#fff", fontSize: 16, fontWeight: "bold", position: "absolute", right: 15, top: 15 },
//   dropIcon: { position: "absolute", right: 10, top: 35 },
//   userLocation: { color: "#fff", fontSize: 12, marginTop: 5 },
//   centerList: { marginTop: 10 },
//   centerCard: { backgroundColor: "#fff", margin: 10, borderRadius: 10, overflow: "hidden", elevation: 3 },
//   centerImage: { width: "100%", height: 150 },
//   centerInfo: { padding: 10 },
//   centerName: { fontSize: 16, fontWeight: "bold" },
//   centerLocation: { fontSize: 12, color: "gray", marginVertical: 3 },
//   centerDistance: { fontSize: 12, color: "gray" }
// });

// export default BloodBankScreen;
