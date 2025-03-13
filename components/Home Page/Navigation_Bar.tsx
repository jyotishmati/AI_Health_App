// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// const SearchBar = () => {
//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.innerContainer}>
//         <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.searchIcon}>
//           <Path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" 
//             stroke="#D9D9D9" strokeWidth="1.94126" strokeLinecap="round" strokeLinejoin="round"/>
//           <Path d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" 
//             stroke="#D9D9D9" strokeWidth="1.94126" strokeLinecap="round" strokeLinejoin="round"/>
//         </Svg>
//         <TextInput style={styles.input} placeholder="Search Doctors" placeholderTextColor="#9CA3AF" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     width: 390,
//     height: 85,
//     flexShrink: 0,
//     backgroundColor: '#FAFAFA',
//     marginTop: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   innerContainer: {
//     width: 320,
//     height: 48,
//     flexShrink: 0,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#F1F1F1',
//     backgroundColor: '#FFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#002D3D',
//   },
// });

// export default SearchBar;





import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

const SearchBar = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Svg
          width={scale(24)}
          height={scale(24)}
          viewBox="0 0 24 24"
          fill="none"
          style={styles.searchIcon}
        >
          <Path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#D9D9D9"
            strokeWidth="1.94126"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
            stroke="#D9D9D9"
            strokeWidth="1.94126"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <TextInput
          style={styles.input}
          placeholder="Search Doctors"
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: scale(390),
    height: scale(85),
    flexShrink: 0,
    backgroundColor: '#FAFAFA',
    marginTop: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: scale(320),
    height: scale(48),
    flexShrink: 0,
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: '#F1F1F1',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    marginLeft: scale(-10), // Moved inner container slightly left
  },
  searchIcon: {
    marginRight: scale(10),
  },
  input: {
    flex: 1,
    fontSize: scale(16),
    color: '#002D3D',
  },
});

export default SearchBar;
