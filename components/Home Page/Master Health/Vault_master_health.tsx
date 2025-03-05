// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { FontAwesome, Feather } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const data = [
//   {
//     title: "Hemogram",
//     tests: [
//       { name: "Hemoglobin", range: "13.0 - 18.0 g/dl", value: "8.0*", color: "red" },
//       { name: "Hematocrit", range: "39.0 - 54.0 %", value: "26.8*", color: "red" },
//       { name: "Red Blood Cells", range: "4.2 - 6.5 Million/uL", value: "2.95*", color: "red" },
//       { name: "MCV", range: "75.0 - 95.0 fl", value: "90.9", color: "green" },
//     ],
//     buttonText: ["CBC", "Differential Count"],
//   },
//   {
//     title: "Electrolytes Panel",
//     tests: [
//       { name: "Sodium", range: "136.0 - 145.0 mEq/l", value: "110.0*", color: "red" },
//       { name: "Potassium", range: "3.5 - 5.0 mEq/l", value: "8.0*", color: "red" },
//       { name: "Chloride", range: "98 - 107 mEq/l", value: "99.0", color: "green" },
//     ],
//     buttonText: ["Electrolytes"],
//   },
//   {
//     title: "Liver Panel",
//     tests: [
//       { name: "Bilirubin, Total", range: "0.3 - 1.2 mg/dl", value: "0.47*", color: "green" },
//     ],
//     buttonText: ["Liver Function"],
//   },
// ];

// const HealthPanel = ({ title, tests, buttonText }: { title: string, tests: any[], buttonText: string[] }) => {
//   return (
//     <View style={styles.panel}>
//       <View style={styles.panelHeader}>
//         <Text style={styles.panelTitle}>{title}</Text>
//         <Feather name="download" size={18} color="#023047" />
//       </View>

//       <ScrollView style={styles.testContainer} nestedScrollEnabled>
//         {tests.map((test, index) => (
//           <View key={index} style={styles.testRow}>
//             <View>
//               <Text style={styles.testName}>{test.name}</Text>
//               <Text style={styles.testRange}>{test.range}</Text>
//             </View>
//             <Text style={[styles.testValue, { color: test.color }]}>{test.value}</Text>
//           </View>
//         ))}
//       </ScrollView>

//       <View style={styles.buttonGroup}>
//         {buttonText.map((text, index) => (
//           <TouchableOpacity key={index} style={styles.button}>
//             <Text style={styles.buttonText}>{text}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.warningContainer}>
//         <LinearGradient
//           colors={["red", "orange", "green"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.warningBar}
//         />
//         <View style={styles.warningLabels}>
//           <Text style={styles.warningText}>Danger</Text>
//           <Text style={styles.warningText}>Warning</Text>
//           <Text style={styles.warningText}>Normal</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const MasterHealthVault = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <FontAwesome name="arrow-left" size={20} color="black" />
//         <Text style={styles.headerTitle}>Master Health Vault</Text>
//         <View style={styles.iconGroup}>
//           <FontAwesome name="camera" size={20} color="black" style={styles.icon} />
//           <Feather name="upload" size={20} color="black" />
//         </View>
//       </View>

//       <ScrollView>
//         {data.map((panel, index) => (
//           <HealthPanel key={index} {...panel} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F6F6F6",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "white",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   iconGroup: {
//     flexDirection: "row",
//   },
//   icon: {
//     marginRight: 12,
//   },
//   panel: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     margin: 10,
//     padding: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   panelHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E0E0E0",
//   },
//   panelTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   testContainer: {
//     maxHeight: 150, // Each panel is scrollable
//   },
//   testRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 8,
//   },
//   testName: {
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   testRange: {
//     fontSize: 12,
//     color: "gray",
//   },
//   testValue: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: "#023047",
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 12,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   warningContainer: {
//     marginTop: 8,
//   },
//   warningBar: {
//     height: 6,
//     borderRadius: 3,
//   },
//   warningLabels: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 4,
//   },
//   warningText: {
//     fontSize: 12,
//     color: "gray",
//   },
// });

// export default MasterHealthVault;



import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Sample Data
const data = [
  {
    title: "Hemogram",
    tests: [
      { name: "Hemoglobin", range: "13.0 - 18.0 g/dl", value: "8.0*", color: "red" },
      { name: "Hematocrit", range: "39.0 - 54.0 %", value: "26.8*", color: "red" },
      { name: "Red Blood Cells", range: "4.2 - 6.5 Million/uL", value: "2.95*", color: "red" },
      { name: "MCV", range: "75.0 - 95.0 fl", value: "90.9", color: "green" },
    ],
    buttonText: ["CBC", "Differential Count"],
  },
];

// Health Panel Component
const HealthPanel = ({
  title,
  tests = [],
  buttonText = [],
}: {
  title: string;
  tests?: any[];
  buttonText?: string[];
}) => {
  return (
    <View style={styles.panel}>
      {/* Panel Header */}
      <View style={styles.panelHeader}>
        <Text style={styles.panelTitle}>{title}</Text>
        <Feather name="download" size={18} color="#023047" />
      </View>

      {/* Test Results */}
      {tests.length > 0 ? (
        tests.map((test, index) => (
          <View key={index} style={styles.testRow}>
            <View>
              <Text style={styles.testName}>{test.name}</Text>
              <Text style={styles.testRange}>{test.range}</Text>
            </View>
            <Text style={[styles.testValue, { color: test.color }]}>{test.value}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>No test data available</Text>
      )}

      {/* Buttons */}
      {buttonText.length > 0 && (
        <View style={styles.buttonGroup}>
          {buttonText.map((text, index) => (
            <TouchableOpacity key={index} style={[styles.button, index === 0 && styles.activeButton]}>
              <Text style={[styles.buttonText, index === 0 && styles.activeButtonText]}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Warning Section */}
      <View style={styles.warningContainer}>
        <LinearGradient colors={["red", "orange", "green"]} style={styles.warningBar} />
        <View style={styles.slider} />
        <View style={styles.warningLabels}>
          <Text style={styles.warningText}>Danger</Text>
          <Text style={styles.warningText}>Warning</Text>
          <Text style={styles.warningText}>Normal</Text>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  panel: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  testRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  testName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  testRange: {
    fontSize: 14,
    color: "gray",
  },
  testValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  noDataText: {
    textAlign: "center",
    color: "gray",
    fontSize: 14,
    marginTop: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#023047",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  activeButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#023047",
  },
  activeButtonText: {
    color: "#023047",
    fontWeight: "bold",
  },
  warningContainer: {
    marginTop: 8,
    alignItems: "center",
  },
  warningBar: {
    width: "100%",
    height: 6,
    borderRadius: 3,
  },
  slider: {
    width: 12,
    height: 12,
    backgroundColor: "gray",
    borderRadius: 6,
    position: "absolute",
    left: "25%", // Adjust based on value
    top: -3,
  },
  warningLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 4,
  },
  warningText: {
    fontSize: 14,
  },
});

// Rendering Panels
const App = () => {
  return (
    <ScrollView>
      {data?.length > 0 ? (
        data.map((panel, index) => (
          <HealthPanel key={index} title={panel.title} tests={panel.tests} buttonText={panel.buttonText} />
        ))
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>No Health Data Available</Text>
      )}
    </ScrollView>
  );
};

export default App;

