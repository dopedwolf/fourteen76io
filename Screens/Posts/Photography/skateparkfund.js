import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Skateparkfund extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Skatepark Fundraiser"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
              require("../../../assets/images/photography/skate/one.jpg"),
              require("../../../assets/images/photography/skate/two.jpg"),
              require("../../../assets/images/photography/skate/three.jpg"),
              require("../../../assets/images/photography/skate/four.jpg"),
              require("../../../assets/images/photography/skate/five.jpg"),
              require("../../../assets/images/photography/skate/six.jpg"),
              require("../../../assets/images/photography/skate/seven.jpg"),
              require("../../../assets/images/photography/skate/eight.jpg"),
              require("../../../assets/images/photography/skate/nine.jpg"),
              require("../../../assets/images/photography/skate/ten.jpg"),
              require("../../../assets/images/photography/skate/eleven.jpg"),
              require("../../../assets/images/photography/skate/twelve.jpg"),
              require("../../../assets/images/photography/skate/thirteen.jpg"),
              require("../../../assets/images/photography/skate/fourteen.jpg"),
              require("../../../assets/images/photography/skate/fifteen.jpg"),
              require("../../../assets/images/photography/skate/sixteen.jpg"),
              require("../../../assets/images/photography/skate/seventeen.jpg"),
              require("../../../assets/images/photography/skate/eighteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Skateparkfund;
