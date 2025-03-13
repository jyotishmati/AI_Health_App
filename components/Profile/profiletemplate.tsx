// import React, { useState } from "react";
// import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Platform,
//   Dimensions,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { useNavigation } from "@react-navigation/native";

// const { width, height } = Dimensions.get("window");

// // Dynamic font sizes & layout adjustments
// const dynamicFontSize = width > 400 ? 18 : 16;
// const dynamicPadding = width > 400 ? 14 : 12;
// const buttonHeight = width > 400 ? 50 : 45;
// const titleFontSize = width > 400 ? 26 : 22;

// interface FormField {
//   label: string;
//   placeholder: string;
//   isDropdown?: boolean;
//   isDatePicker?: boolean; // For DOB Picker
//   options?: string[];
// }

// interface ProfileFormProps {
//   title: string;
//   step: string;
//   fields: FormField[];
//   nextScreen?: string;
// }

// const ProfileForm: React.FC<ProfileFormProps> = ({ title, step, fields, nextScreen }) => {
//   const navigation = useNavigation();
//   const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   // Handle dropdown change
//   const handleDropdownChange = (field: string, value: string) => {
//     setSelectedValues({ ...selectedValues, [field]: value });
//   };

//   // Handle Date Picker change
//   const handleDateChange = (event: any, date?: Date) => {
//     setShowDatePicker(false); // Hide picker after selection
//     if (date) {
//       setSelectedDate(date);
//       setSelectedValues({ ...selectedValues, DOB: date.toDateString() });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={[styles.title, { fontSize: titleFontSize }]}>{title}</Text>
//       <Text style={styles.stepText}>Complete {step}</Text>

//       {/* Scrollable area for all form fields, Next button, and bottom bar */}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Form Fields */}
//         {fields.map((field, index) => (
//           <View key={index} style={styles.inputContainer}>
//             <Text style={[styles.label, { fontSize: dynamicFontSize }]}>{field.label}</Text>

//             {/* Date of Birth Picker */}
//             {field.isDatePicker ? (
//               <TouchableOpacity style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
//                 <Text style={styles.dateText}>
//                   {selectedDate ? selectedDate.toDateString() : field.placeholder}
//                 </Text>
//                 <Ionicons name="calendar-outline" size={20} color="#777" style={styles.icon} />
//               </TouchableOpacity>
//             ) : field.isDropdown ? (
//               /* Dropdown Picker */
//               <View>
//                 <Picker
//                   selectedValue={selectedValues[field.label] || ""}
//                   onValueChange={(value) => handleDropdownChange(field.label, value)}
//                   style={[styles.picker, { fontSize: dynamicFontSize }]}
//                   mode="dropdown"
//                 >
//                   <Picker.Item label={field.placeholder} value="" enabled={false} />
//                   {field.options?.map((option, idx) => (
//                     <Picker.Item key={idx} label={option} value={option} />
//                   ))}
//                 </Picker>
//               </View>
//             ) : (
//               /* Regular Input */
//               <View style={styles.inputBox}>
//                 <TextInput
//                   placeholder={field.placeholder}
//                   placeholderTextColor="#999"
//                   style={[styles.input, { fontSize: dynamicFontSize }]}
//                 />
//               </View>
//             )}
//           </View>
//         ))}

//         {/* Date Picker Modal (for DOB) */}
//         {showDatePicker && (
//           <DateTimePicker
//             value={selectedDate || new Date()}
//             mode="date"
//             display={Platform.OS === "ios" ? "spinner" : "default"}
//             onChange={handleDateChange}
//             maximumDate={new Date()} // Prevent future dates
//           />
//         )}

//         {/* Next Button at the bottom of the ScrollView */}
//         {nextScreen && (
//           <TouchableOpacity
//             style={[styles.nextButton, { height: buttonHeight, paddingVertical: dynamicPadding }]}
//             onPress={() => navigation.navigate(nextScreen as never)}
//           >
//             <Text style={styles.nextButtonText}>Next</Text>
//           </TouchableOpacity>
//         )}

//         {/* Bottom Bar */}
//         <View style={styles.bottomBar}>
//           <View style={styles.bottomIndicator} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default ProfileForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: width * 0.06,
//   },
//   title: {
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center",
//   },
//   stepText: {
//     color: "#555",
//     fontSize: 16,
//     marginBottom: height * 0.02,
//     textAlign: "center",
//   },

//   /* ScrollView content container: 
//      gives enough padding at the bottom so the user can see the last items clearly. */
//   scrollContent: {
//     paddingBottom: 40, // Add extra space so Next button & bottom bar are visible
//   },

//   inputContainer: {
//     marginBottom: height * 0.025,
//   },
//   label: {
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: 6,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 12,
//     backgroundColor: "#F8F8F8",
//   },
//   input: {
//     color: "#000",
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     width: "100%",
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: "#F8F8F8",
//   },
//   datePicker: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between", // icon on the right
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 12,
//     backgroundColor: "#F8F8F8",
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   icon: {
//     marginLeft: 10,
//   },

//   /* Next Button */
//   nextButton: {
//     backgroundColor: "#002D3D",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   nextButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   /* Bottom Bar */
//   bottomBar: {
//     marginTop: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bottomIndicator: {
//     width: 200,
//     height: 5,
//     borderRadius: 5,
//     backgroundColor: "#9CA3AF",
//   },
// });


import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

// Dynamic font sizes & layout adjustments
const dynamicFontSize = width > 400 ? 18 : 16;
const dynamicPadding = width > 400 ? 14 : 12;
const buttonHeight = width > 400 ? 50 : 45;
const titleFontSize = width > 400 ? 26 : 22;

interface FormField {
  label: string;
  placeholder: string;
  isDropdown?: boolean;
  isDatePicker?: boolean; // For DOB Picker
  options?: string[];
}

interface ProfileFormProps {
  title: string;
  step: string;
  fields: FormField[];
  nextScreen?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ title, step, fields, nextScreen }) => {
  const navigation = useNavigation();
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Handle dropdown change
  const handleDropdownChange = (field: string, value: string) => {
    setSelectedValues({ ...selectedValues, [field]: value });
  };

  // Handle Date Picker change
  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false); // Hide picker after selection
    if (date) {
      setSelectedDate(date);
      setSelectedValues({ ...selectedValues, DOB: date.toDateString() });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: titleFontSize }]}>{title}</Text>
      <Text style={styles.stepText}>Complete {step}</Text>

      {/* Scrollable area for all form fields, Next button, and bottom bar */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Form Fields */}
        {fields.map((field, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={[styles.label, { fontSize: dynamicFontSize }]}>{field.label}</Text>

            {field.isDatePicker ? (
              /* Date of Birth Picker */
              <TouchableOpacity
                style={[styles.inputBox, styles.datePicker]}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>
                  {selectedDate ? selectedDate.toDateString() : field.placeholder}
                </Text>
                <Ionicons name="calendar-outline" size={20} color="#777" style={styles.icon} />
              </TouchableOpacity>
            ) : field.isDropdown ? (
              /* Dropdown Picker */
              <View style={styles.inputBox}>
                <Picker
                  selectedValue={selectedValues[field.label] || ""}
                  onValueChange={(value) => handleDropdownChange(field.label, value)}
                  style={[styles.picker, { fontSize: dynamicFontSize }]}
                  mode="dropdown"
                >
                  <Picker.Item label={field.placeholder} value="" enabled={false} />
                  {field.options?.map((option, idx) => (
                    <Picker.Item key={idx} label={option} value={option} />
                  ))}
                </Picker>
              </View>
            ) : (
              /* Regular Text Input */
              <View style={styles.inputBox}>
                <TextInput
                  placeholder={field.placeholder}
                  placeholderTextColor="#999"
                  style={[styles.input, { fontSize: dynamicFontSize }]}
                />
              </View>
            )}
          </View>
        ))}

        {/* Date Picker Modal (for DOB) */}
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
            maximumDate={new Date()} // Prevent future dates
          />
        )}

        {/* Next Button at the bottom of the ScrollView */}
        {nextScreen && (
          <TouchableOpacity
            style={[styles.nextButton, { height: buttonHeight, paddingVertical: dynamicPadding }]}
            onPress={() => navigation.navigate(nextScreen as never)}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <View style={styles.bottomIndicator} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: width * 0.06,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  stepText: {
    color: "#555",
    fontSize: 16,
    marginBottom: height * 0.02,
    textAlign: "center",
  },

  /* ScrollView content container: 
     gives enough padding at the bottom so the user can see the last items clearly. */
  scrollContent: {
    paddingBottom: scale(40),
  },

  inputContainer: {
    marginBottom: height * 0.025,
  },
  label: {
    fontWeight: "500",
    color: "#333",
    marginBottom: scale(6),
  },

  /* Common box style for text input & picker */
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: scale(10),
    padding: scale(12),
    backgroundColor: "#F8F8F8",
  },
  input: {
    color: "#000",
  },

  /* We keep the picker style minimal so that 
     the container's border shows on both iOS and Android */
  picker: {
    flex: 1,
    color: "#000",
  },

  /* Date of Birth field merges inputBox styling */
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // icon on the right
  },
  dateText: {
    fontSize: scale(16),
    color: "#000",
  },
  icon: {
    marginLeft: scale(10),
  },

  /* Next Button */
  nextButton: {
    backgroundColor: "#002D3D",
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(20),
  },
  nextButtonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
  },

  /* Bottom Bar */
  bottomBar: {
    marginTop: scale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  bottomIndicator: {
    width: scale(200),
    height: scale(5),
    borderRadius: scale(5),
    backgroundColor: "#9CA3AF",
  },
});
