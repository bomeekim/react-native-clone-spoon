import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

export class CarouselCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: props.entries,
    };
  }

  _renderItem = ({item, index}) => {
    const props = {
      imageUrl: item.img_url.replace('http', 'https'),
      title: item.title,
      subTitle: item.author.nickname,
      subscription: '#'.concat(item.tags.join(' #')),
    };

    return (
      // <View
      //   /* eslint-disable-next-line react-native/no-inline-styles */
      //   style={{
      //     backgroundColor: 'floralwhite',
      //     borderRadius: 5,
      //     height: 250,
      //     padding: 50,
      //     marginLeft: 25,
      //     marginRight: 25,
      //   }}>
      //   {/* eslint-disable-next-line react-native/no-inline-styles */}
      //   <Text style={{fontSize: 30}}>{item.title}</Text>
      //   <Text>{item.text}</Text>
      // </View>
      <Card
        imageUrl={props.imageUrl}
        title={props.title}
        subTitle={props.subTitle}
        subscription={props.subscription}
      />
    );
  };

  render() {
    const {entries} = this.state;
    console.log(entries);

    return (
      <Carousel
        layout={'default'}
        ref={c => {
          this.carousel = c;
        }}
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    );
  }
}
