import 'react-native-gesture-handler';
import React from 'react';
import AppBar from './src/components/AppBar';
import {TabMenu} from './src/components/TabMenu';
import {TopRanking} from './src/pages/TopRanking';
import {NativeBaseProvider, ScrollView, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <ScrollView>
          <AppBar />
          <TabMenu navigation={navigation} />
          <Box safeAreaBottom backgroundColor="white" />
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TopRanking" component={TopRanking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
