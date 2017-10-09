import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class LaundryPunk extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Laundry Punk"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/music/laundry/one.png"),
                require("../../../assets/images/music/laundry/two.png"),
                require("../../../assets/images/music/laundry/three.png"),
                require("../../../assets/images/music/laundry/four.png"),
                require("../../../assets/images/music/laundry/five.png"),
                require("../../../assets/images/music/laundry/six.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = LaundryPunk;
