import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Brianarnold extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Brian Arnold"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/brian/one.jpg"),
                require("../../../assets/images/photography/brian/two.jpg"),
                require("../../../assets/images/photography/brian/three.jpg"),
                require("../../../assets/images/photography/brian/four.jpg"),
                require("../../../assets/images/photography/brian/five.jpg"),
                require("../../../assets/images/photography/brian/six.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Brianarnold;
