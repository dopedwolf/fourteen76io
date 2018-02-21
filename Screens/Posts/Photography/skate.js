import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Skate extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Skate"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>David Sheetz</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/david_skate/one.jpg"),
                require("../../../assets/images/photography/david_skate/two.jpg"),
                require("../../../assets/images/photography/david_skate/three.jpg"),
                require("../../../assets/images/photography/david_skate/four.jpg"),
                require("../../../assets/images/photography/david_skate/five.jpg"),
                require("../../../assets/images/photography/david_skate/six.jpg"),
                require("../../../assets/images/photography/david_skate/seven.jpg"),
                require("../../../assets/images/photography/david_skate/eight.jpg"),
                require("../../../assets/images/photography/david_skate/nine.jpg"),
                require("../../../assets/images/photography/david_skate/ten.jpg"),
                require("../../../assets/images/photography/david_skate/eleven.jpg"),
                require("../../../assets/images/photography/david_skate/twelve.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Skate;
