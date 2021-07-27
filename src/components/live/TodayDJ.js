import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  Stack,
} from 'native-base';

function TodayDJ(props) {
  return (
    <Box
      width={72}
      shadow={1}
      _light={{
        backgroundColor: 'gray.50',
      }}
      _dark={{
        backgroundColor: 'gray.700',
      }}>
      <Box>
        <AspectRatio ratio={1}>
          <Image
            roundedTop="lg"
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="orange.500"
          _text={{
            color: 'white',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}>
          스푼PICK!
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            {props.name}
          </Heading>
          <Heading
            size="xs"
            _light={{
              color: 'red.500',
            }}
            _dark={{
              color: 'red.300',
            }}
            fontWeight="500"
            ml={-0.5}
            mt={-1}>
            {props.subTitle}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {props.subscription}
        </Text>
      </Stack>
    </Box>
  );
}

export default function () {
  return (
    <Center flex={1}>
      <TodayDJ />
    </Center>
  );
}
