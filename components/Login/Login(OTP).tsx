// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// export default function VerificationScreen() {
//   const [otp, setOtp] = useState('');
//   const navigation = useNavigation();
//   return (
//     <KeyboardAvoidingView 
//       style={styles.container} 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={{ flex: 1 }}>
//           <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
//             <View style={styles.backButton}>
//               <TouchableOpacity>
//                 {/* Back button icon can be added here */}
//               </TouchableOpacity>
//             </View>
            
//             <View style={styles.contentContainer}>
//               <Text style={styles.title}>Verification Code</Text>
//               <Text style={styles.subtitle}>
//                 Please enter verification code, we sent it to your Email: 
//               </Text>
              
//               <TextInput
//                 placeholder="Enter OTP"
//                 style={styles.input}
//                 keyboardType="number-pad"
//                 value={otp}
//                 onChangeText={setOtp}
//                 placeholderTextColor="#9CA3AF"
//               />
              
//               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile1' as never)}>
//                 <Text style={styles.buttonText}>Continue</Text>
//               </TouchableOpacity>
              
//               <View style={styles.loginContainer}>
//                 <Text style={styles.loginText}>Login to your corporate account.</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.loginLink}>Login here</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
            
//             <View style={styles.imageContainer}>
//               <Image source={require('../../assets/images/OTP.png')} style={styles.image} resizeMode="contain" />
//             </View>
//           </ScrollView>
          
//           <View style={styles.bottomBar}>
//             <View style={styles.bottomIndicator} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//   },
//   backButton: {
//     height: 24,
//     justifyContent: 'center',
//   },
//   contentContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#002D3D',
//     textAlign: 'center',
//     marginBottom: 0,
//   },
//   subtitle: {
//     fontSize: 15,
//     color: '#9CA3AF',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//     paddingBottom: 6,
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#9CA3AF',
//   },
//   button: {
//     backgroundColor: '#002D3D',
//     borderRadius: 25,
//     paddingVertical: 14,
//     width: '100%',
//     marginTop: 24,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 12,
//     gap: 4,
//   },
//   loginText: {
//     color: '#9CA3AF',
//     fontSize: 14,
//   },
//   loginLink: {
//     color: '#002D3D',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   image: {
//     width: 250,
//     height: 346,
//   },
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: 60,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottomIndicator: {
//     width: 200,
//     height: 5,
//     backgroundColor: '#9CA3AF',
//     borderRadius: 10,
//   },
// });


import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

export default function VerificationScreen() {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
              <View style={styles.backButton}>
                <TouchableOpacity>
                  {/* Back button icon can be added here */}
                </TouchableOpacity>
              </View>
              
              <View style={styles.contentContainer}>
                <Text style={styles.title}>Verification Code</Text>
                <Text style={styles.subtitle}>
                  Please enter verification code, we sent it to your Email: 
                </Text>
                
                <TextInput
                  placeholder="Enter OTP"
                  style={styles.input}
                  keyboardType="number-pad"
                  value={otp}
                  onChangeText={setOtp}
                  placeholderTextColor="#9CA3AF"
                />
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile1' as never)}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                
                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Login to your corporate account.</Text>
                  <TouchableOpacity>
                    <Text style={styles.loginLink}>Login here</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/OTP.png')} style={styles.image} resizeMode="contain" />
              </View>
            </ScrollView>
            
            <View style={styles.bottomBar}>
              <View style={styles.bottomIndicator} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: scale(20),
    justifyContent: 'center',
  },
  backButton: {
    height: scale(24),
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: '#002D3D',
    textAlign: 'center',
    marginBottom: scale(0),
  },
  subtitle: {
    fontSize: scale(15),
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: scale(24),
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: scale(6),
    fontSize: scale(16),
    textAlign: 'center',
    color: '#9CA3AF',
    marginBottom: scale(16), // Added gap between input and button
  },
  button: {
    backgroundColor: '#002D3D',
    borderRadius: scale(25),
    paddingVertical: scale(14),
    width: '100%',
    marginTop: scale(24),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: scale(16),
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(12),
    gap: scale(4),
  },
  loginText: {
    color: '#9CA3AF',
    fontSize: scale(14),
  },
  loginLink: {
    color: '#002D3D',
    fontSize: scale(14),
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: scale(12),
  },
  image: {
    width: scale(250),
    height: scale(346),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scale(60),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIndicator: {
    width: scale(200),
    height: scale(5),
    backgroundColor: '#9CA3AF',
    borderRadius: scale(10),
  },
});
