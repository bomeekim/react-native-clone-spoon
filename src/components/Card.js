import React, {Component} from 'react';
import {Image, Text, Box, Stack, Heading} from 'native-base';

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imageUrl, title, subTitle, description} = this.props;

    return (
      <Box bg="white" shadow={4} rounded="lg" pt={2}>
        <Image
          source={{
            uri: imageUrl,
          }}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
        />
        <Stack space={2} p={[4, 4, 8]}>
          <Heading size="sm" noOfLines={2}>
            {title}
          </Heading>
          {subTitle && (
            <Text fontSize="xs" color="gray.400">
              {subTitle}
            </Text>
          )}
          {description && (
            <Text
              fontSize="xs"
              lineHeight={[5, 5, 7]}
              noOfLines={[4, 4, 2]}
              color="gray.700">
              {description}
            </Text>
          )}
        </Stack>
      </Box>
    );
  }
}
