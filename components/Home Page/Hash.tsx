// import React from "react";
// import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

// const CommunityScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Sidebar */}
//       <View style={styles.sidebar}>
//         <View style={styles.profileContainer}>
//           <Image source={require("../../assets/images/page1.jpg")} style={styles.profileSquare} />
//         </View>

//         <View style={styles.sidebarIcons}>
//           {[ 
//             require("../../assets/images/page1.jpg"),
//             require("../../assets/images/page1.jpg"),
//             require("../../assets/images/page1.jpg"),
//             require("../../assets/images/page1.jpg"),
//           ].map((image, index) => (
//             <TouchableOpacity key={index} style={styles.circleIcon}>
//               <Image source={image} style={styles.circleImage} />
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Community</Text>
//           <View style={styles.notificationBadge}><Text style={styles.badgeText}>+3</Text></View>
//         </View>
//         <Text style={styles.headerSubtitle}>Welcome to Community</Text>

//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <View style={styles.profileInfo}>
//             <Text style={styles.profileLabel}>DOCTOR</Text>
//             <Text style={styles.profileName}>Aisha Verma</Text>
//             <Text style={styles.profileDetails}>Mobile : 9876543210</Text>
//             <Text style={styles.profileDetails}>MID : NSI1234567890</Text>
//           </View>
//         </View>

//         {/* Hashtags */}
//          <ScrollView style={styles.hashtagList} showsVerticalScrollIndicator={false}>
//            <View style={styles.announcementRow}>
//              <Text style={styles.hashtagTitle}>#announcements</Text>
//              <View style={styles.announcementBadge}><Text style={styles.badgeText}>3</Text></View>
//            </View>
//           {[
//             "#updates", "#alerts", "#resources", "#job-opportunities", "#vaccination", "#diagnosis", "#surgeries", "#prevention", "#med-life", "#med-insights", "#medical-buzz"
//           ].map((tag, index) => (
//             <TouchableOpacity key={index}>
//               <Text style={styles.hashtagText}>{tag}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//         {/* Search Bar */}
//         <View style={styles.searchBar}>
//           <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
//           <TextInput placeholder="Search #" style={styles.searchInput} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, flexDirection: "row", backgroundColor: "white" },

//   sidebar: { 
//     width: 150, // Increased width to extend slightly left
//     backgroundColor: "#0F2D44", 
//     alignItems: "center", 
//     paddingTop: 40, // Increased to push images down
//     paddingBottom: 10 
//   },
  
//   profileContainer: { 
//     width: 150, 
//     height: 150, 
//     marginBottom: 25 // Increased spacing below profile
//   },
//   profileSquare: { width: "100%", height: "100%", }, // Square profile image
  
//   sidebarIcons: { 
//     alignItems: "center", 
//     gap: 12, // Slightly increased spacing between circle images
    
//   },
//   circleIcon: { width: 75, height: 75, borderRadius: 38, overflow: "hidden" },
//   circleImage: { width: "100%", height: "100%" },

//   mainContent: { flex: 1, padding: 16 },
//   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   headerTitle: { fontSize: 20, fontWeight: "bold", color: "#1f2937" },
//   notificationBadge: { backgroundColor: "#0F2D44", borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4 },
//   badgeText: { color: "white", fontSize: 12, fontWeight: "bold" },
//   headerSubtitle: { fontSize: 14, color: "#6b7280", marginBottom: 16 },

//   profileCard: { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 16 },
//   profileInfo: { },
//   profileLabel: { fontSize: 10, fontWeight: "bold", color: "#6b7280" },
//   profileName: { fontSize: 18, fontWeight: "bold", color: "#1f2937" },
//   profileDetails: { fontSize: 12, color: "#6b7280" },

//   hashtagList: { marginTop: 16 },
//   announcementRow: { flexDirection: "row", alignItems: "center" },
//   hashtagTitle: { fontSize: 14, fontWeight: "bold", color: "#1f2937" },
//   announcementBadge: { backgroundColor: "#e5e7eb", borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4, marginLeft: 8 },
//   hashtagText: { fontSize: 14, color: "#6b7280", marginTop: 4 },

//   searchBar: { flexDirection: "row", backgroundColor: "#f3f4f6", padding: 12, borderRadius: 50, alignItems: "center", marginTop: 16 },
//   searchIcon: { marginRight: 8 },
//   searchInput: { flex: 1, fontSize: 14, color: "#1f2937" },
// });

// export default CommunityScreen;


import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CommunityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* NEW: Title Container (Community + Welcome) ABOVE topContainer */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Community</Text>
        <Text style={styles.headerSubtitle}>Welcome to Community</Text>
      </View>

      {/* TOP CONTAINER (Profile & Info) */}
      <View style={styles.topContainer}>
        {/* Profile: Photo (Left) + Vertical Divider + Info (Right) */}
        <View style={styles.profileWrapper}>
          {/* User Photo */}
          <Image
            source={require("../../assets/images/page1.jpg")}
            style={styles.profileImage}
          />

          {/* Vertical Divider */}
          <View style={styles.verticalDivider} />

          {/* User Info (NO Community/Subtitle here anymore) */}
          <View style={styles.userInfoContainer}>
            <Text style={styles.doctorLabel}>DOCTOR</Text>
            <Text style={styles.userName}>Aisha Verma</Text>
            <Text style={styles.userDetails}>Mobile : 9876543210</Text>
            <Text style={styles.userDetails}>MID : NSI1234567890</Text>
          </View>
        </View>
      </View>

      {/* BOTTOM CONTAINER: Navy Panel (Left) + Main Content (Right) */}
      <View style={styles.bottomContainer}>
        {/* Left Navy Panel with 4 Circles */}
        <View style={styles.navyPanel}>
          {[
            require("../../assets/images/page1.jpg"),
            require("../../assets/images/page1.jpg"),
            require("../../assets/images/page1.jpg"),
            require("../../assets/images/page1.jpg"),
          ].map((image, index) => (
            <TouchableOpacity key={index} style={styles.circleIcon}>
              <Image source={image} style={styles.circleImage} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Hashtags */}
          <ScrollView style={styles.hashtagList} showsVerticalScrollIndicator={false}>
            <View style={styles.announcementRow}>
              <Text style={styles.hashtagTitle}>#announcements</Text>
              <View style={styles.announcementBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
            {[
              "#updates",
              "#alerts",
              "#resources",
              "#job-opportunities",
              "#vaccination",
              "#diagnosis",
              "#surgeries",
              "#prevention",
              "#med-life",
              "#med-insights",
              "#medical-buzz",
            ].map((tag, idx) => (
              <TouchableOpacity key={idx}>
                <Text style={styles.hashtagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput placeholder="Search #" style={styles.searchInput} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  /* ROOT: Column => titleContainer + topContainer + bottomContainer */
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* TITLE CONTAINER */
  titleContainer: {
    backgroundColor: "#FFFFFF", // or any color you prefer
    paddingTop: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },

  /* TOP CONTAINER */
  topContainer: {
    backgroundColor: "#f3f4f6",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  profileWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    resizeMode: "cover",
    borderRadius: 6,
  },
  verticalDivider: {
    width: 1,
    height: 110,
    backgroundColor: "#ccc",
    marginHorizontal: 16,
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  doctorLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6b7280",
    marginBottom: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
  },
  userDetails: {
    fontSize: 13,
    color: "#6b7280",
  },

  /* BOTTOM CONTAINER */
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
  },

  /* LEFT NAVY PANEL */
  navyPanel: {
    width: 130, // Increased width
    backgroundColor: "#0F2D44",
    alignItems: "center",
    paddingVertical: 20,
  },
  circleIcon: {
    width: 80, // Larger images
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 16,
  },
  circleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /* MAIN CONTENT (Hashtags + Search) */
  mainContent: {
    flex: 1,
    padding: 16,
  },
  hashtagList: {
    flex: 1,
  },
  announcementRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  hashtagTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
  },
  announcementBadge: {
    backgroundColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  hashtagText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
  },

  /* SEARCH BAR */
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#1f2937",
  },
});
