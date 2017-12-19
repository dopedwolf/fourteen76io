import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Ryan extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Ryan Chandler"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/ryanart/arrowdeer.png"),
                require("../../../assets/images/artists/ryanart/astro.png"),
                require("../../../assets/images/artists/ryanart/bigone.png"),
                require("../../../assets/images/artists/ryanart/choke.png"),
                require("../../../assets/images/artists/ryanart/guitar.png"),
                require("../../../assets/images/artists/ryanart/shirtballoons.png"),
                require("../../../assets/images/artists/ryanart/walkingloons.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Ryan;
