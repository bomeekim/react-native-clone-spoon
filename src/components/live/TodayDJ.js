import React, {Component} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Center,
  Stack,
} from 'native-base';

export class TodayDJ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, title, description, imageUrl} = this.props;

    return (
      <Box
        // width={72}
        shadow={1}
        w={{base: 56, md: 80, lg: 'md'}}
        _light={{
          backgroundColor: 'gray.50',
        }}
        _dark={{
          backgroundColor: 'gray.700',
        }}>
        <Box>
          <AspectRatio ratio={1}>
            <Image
              size={{base: 56, md: 80, lg: 'md'}}
              roundedTop="lg"
              source={{
                uri: imageUrl,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="orange.500"
            _text={{
              color: 'white',
              fontWeight: '700',
              fontSize: 'sm',
            }}
            position="absolute"
            bottom={0}
            px={2}
            py={1}>
            {title ? title : '오늘의DJ'}
          </Center>
        </Box>
        <Stack p={4} space={2}>
          <Stack space={2}>
            <Heading size="xs" ml={-1}>
              {name}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    );
  }
}
