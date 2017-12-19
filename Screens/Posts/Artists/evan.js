import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Evan extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Evan Jones"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/evanart/blacknwhite1.png"),
                require("../../../assets/images/artists/evanart/chruch.png"),
                require("../../../assets/images/artists/evanart/deathgrips1.png"),
                require("../../../assets/images/artists/evanart/kiss1.png"),
                require("../../../assets/images/artists/evanart/other1.png"),
                require("../../../assets/images/artists/evanart/void1.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Evan;
