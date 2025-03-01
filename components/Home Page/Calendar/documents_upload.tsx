// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   Image,
//   StyleSheet
// } from "react-native";
// import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import { WebView } from "react-native-webview";
// import { useNavigation } from "@react-navigation/native";
// const documents = [
//   { id: "1", name: "Hemogram Test.pdf", date: "24/01/2024 20:03 PM", file: require("../../files/1doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
//   { id: "2", name: "Lipid Test.pdf", date: "24/01/2024 09:15 AM", file: require("../../files/2doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
//   { id: "3", name: "Liver Test.pdf", date: "24/01/2024 20:30 PM", file: require("../../files/3doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
//   { id: "4", name: "Hemogram Test.pdf", date: "24/01/2024 20:15 PM", file: require("../../files/4doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
// ];

// const DocumentManagerScreen = () => {
//   const navigation = useNavigation();
//   const [search, setSearch] = useState("");
//   const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} color="#0C3C5F" />
//         <Text style={styles.headerText}>Document Manager</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <FontAwesome name="search" size={18} color="gray" />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search document"
//             value={search}
//             onChangeText={setSearch}
//           />
//         </View>
//       </View>

//       {/* Document Count & Actions */}
//       <View style={styles.documentActions}>
//         <Text style={styles.documentCount}>{documents.length} Documents</Text>
//         <View style={styles.sortActions}>
//           <Text style={styles.sortText}>Default</Text>
//           <Ionicons name="swap-vertical" size={18} color="gray" />
//           <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Upload" as never)}>
//             <Ionicons name="add" size={18} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Document Grid */}
//       <FlatList
//         data={documents}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             onPress={() => setSelectedPdf(item.file)}
//             style={styles.documentItem}
//           >
//             {/* PDF Preview (Instead of Icon) */}
//             <Image source={item.preview} style={styles.documentImage} resizeMode="cover" />
            
//             <Text style={styles.documentTitle}>{item.name}</Text>
//             <Text style={styles.documentDate}>{item.date}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {/* PDF Viewer Modal */}
//       <Modal visible={!!selectedPdf} animationType="slide" transparent={false}>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity onPress={() => setSelectedPdf(null)} style={styles.closeButton}>
//             <Ionicons name="close" size={24} color="black" />
//           </TouchableOpacity>
//           {selectedPdf && <WebView source={{ uri: selectedPdf }} style={{ flex: 1 }} />}
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default DocumentManagerScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   headerText: {
//     marginLeft: 12,
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#0C3C5F",
//   },
//   searchContainer: {
//     backgroundColor: "#0C3C5F",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//   },
//   searchBar: {
//     backgroundColor: "white",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     borderRadius: 50,
//     height: 40,
//   },
//   searchInput: {
//     marginLeft: 10,
//     flex: 1,
//     fontSize: 16,
//   },
//   documentActions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   documentCount: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   sortActions: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   sortText: {
//     fontSize: 16,
//     color: "gray",
//     marginRight: 8,
//   },
//   addButton: {
//     marginLeft: 12,
//     backgroundColor: "#0C3C5F",
//     borderRadius: 50,
//     padding: 8,
//   },
//   documentItem: {
//     backgroundColor: "white",
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     padding: 8,
//     marginHorizontal: 4,
//     marginBottom: 16,
//     width: "48%",
//   },
//   documentImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//   },
//   documentTitle: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginTop: 8,
//   },
//   documentDate: {
//     fontSize: 12,
//     color: "gray",
//   },
//   modalContainer: {
//     flex: 1,
//   },
//   closeButton: {
//     padding: 16,
//   },
// });


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const documents = [
  { id: "1", name: "Hemogram Test.pdf", date: "24/01/2024 20:03 PM", file: require("../../files/1doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
  { id: "2", name: "Lipid Test.pdf", date: "24/01/2024 09:15 AM", file: require("../../files/2doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
  { id: "3", name: "Liver Test.pdf", date: "24/01/2024 20:30 PM", file: require("../../files/3doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
  { id: "4", name: "Hemogram Test.pdf", date: "24/01/2024 20:15 PM", file: require("../../files/4doc.pdf"), preview: require("../../../assets/images/page1.jpg") },
];

const DocumentManagerScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isFloatingMenuVisible, setFloatingMenuVisible] = useState(false); // Floating Menu State

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#0C3C5F" />
        <Text style={styles.headerText}>Document Manager</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={18} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search document"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Document Count & Actions */}
      <View style={styles.documentActions}>
        <Text style={styles.documentCount}>{documents.length} Documents</Text>
        <View style={styles.sortActions}>
          <Text style={styles.sortText}>Default</Text>
          <Ionicons name="swap-vertical" size={18} color="gray" />

          {/* Plus Button to Open Floating Menu */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setFloatingMenuVisible(true)} // Open Floating Menu
          >
            <Ionicons name="add" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Document Grid */}
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => setSelectedPdf(item.file)}
            style={styles.documentItem}
          >
            {/* PDF Preview (Instead of Icon) */}
            <Image source={item.preview} style={styles.documentImage} resizeMode="cover" />
            <Text style={styles.documentTitle}>{item.name}</Text>
            <Text style={styles.documentDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Menu Modal (Image 1) */}
      <Modal visible={isFloatingMenuVisible} animationType="fade" transparent>
        <TouchableOpacity
          style={styles.floatingMenuOverlay}
          activeOpacity={1}
          onPress={() => setFloatingMenuVisible(false)} // Close on outside press
        >
          <View style={styles.floatingMenu}>
            <Text style={styles.menuTitle}>Select an Option</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => alert("Upload PDF Selected")}>
              <Ionicons name="cloud-upload" size={20} color="#0C3C5F" />
              <Text style={styles.menuText}>Upload PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => alert("Scan Document Selected")}>
              <Ionicons name="scan" size={20} color="#0C3C5F" />
              <Text style={styles.menuText}>Scan Document</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DocumentManagerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "600",
    color: "#0C3C5F",
  },
  searchContainer: {
    backgroundColor: "#0C3C5F",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 50,
    height: 40,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  documentActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  documentCount: {
    fontSize: 18,
    fontWeight: "600",
  },
  sortActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    fontSize: 16,
    color: "gray",
    marginRight: 8,
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: "#0C3C5F",
    borderRadius: 50,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  documentItem: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    marginHorizontal: 4,
    marginBottom: 16,
    width: "48%",
  },
  documentImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  documentTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  documentDate: {
    fontSize: 12,
    color: "gray",
  },
  floatingMenuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingMenu: {
    width: 200,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#0C3C5F",
  },
});


