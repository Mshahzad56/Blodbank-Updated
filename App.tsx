import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './Navigation/StackNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import SpalishOne from './Src/Screens/SpalishScreens/SpalishOne'

// const App = () => {
//   return (
//     <View style={{ flex: 1, }}>
//       <SpalishOne navigation={undefined} />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})