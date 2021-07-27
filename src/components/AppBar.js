import React from 'react';
import {
  HStack,
  IconButton,
  Spacer,
  Text,
  Box,
  StatusBar,
  HamburgerIcon,
  Image,
  SearchIcon,
  InfoIcon,
} from 'native-base';

function AppBar() {
  return (
    <>
      <StatusBar backgroundColor="orange.500" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="white" />

      <HStack px={1} py={3} justifyContent="space-between">
        <HStack alignItems="center" mx={3}>
          <Image
            source={require('../assets/image/spoon_logo.png')}
            alt="Alternate Text"
            width="50"
            height="10"
            resizeMode="contain"
          />
        </HStack>

        <Spacer />
        <HStack>
          <IconButton icon={<SearchIcon color="dark.100" size="sm" />} />
          <IconButton icon={<InfoIcon color="dark.100" size="sm" />} />
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
