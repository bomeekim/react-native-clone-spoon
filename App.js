import React from 'react';
import AppBar from './src/components/AppBar';
import TabMenu from './src/components/TabMenu';
import { NativeBaseProvider, ScrollView, Box } from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <ScrollView>
          <AppBar />
          <TabMenu />
          <Box safeAreaBottom backgroundColor="white" />
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};
