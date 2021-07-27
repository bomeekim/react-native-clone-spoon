import React from 'react';
import {Image, Text, Box, Stack, Heading} from 'native-base';

function Card(props) {
  return (
    <Box bg="white" shadow={4} rounded="lg" pt={2}>
      <Image
        source={{
          uri: props.imageUrl,
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        {props.imageText}
      </Text>
      <Stack space={2} p={[4, 4, 8]}>
        <Text fontSize="xs" color="gray.400">
          {props.subTitle}
        </Text>
        <Heading size="sm" noOfLines={2}>
          {props.title}
        </Heading>
        <Text
          fontSize="xs"
          lineHeight={[5, 5, 7]}
          noOfLines={[4, 4, 2]}
          color="gray.700">
          {props.subscription}
        </Text>
      </Stack>
    </Box>
  );
}

export default Card;
