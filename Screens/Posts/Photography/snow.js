import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';

class Snow extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Snow Day"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/snow/one.jpg"),
                require("../../../assets/images/photography/snow/two.jpg"),
                require("../../../assets/images/photography/snow/three.jpg"),
                require("../../../assets/images/photography/snow/four.jpg"),
                require("../../../assets/images/photography/snow/five.jpg"),
                require("../../../assets/images/photography/snow/six.jpg"),
                require("../../../assets/images/photography/snow/seven.jpg"),
                require("../../../assets/images/photography/snow/eight.jpg"),
                require("../../../assets/images/photography/snow/nine.jpg"),
                require("../../../assets/images/photography/snow/ten.jpg"),
                require("../../../assets/images/photography/snow/eleven.jpg"),
                require("../../../assets/images/photography/snow/twelve.jpg"),
                require("../../../assets/images/photography/snow/thirteen.jpg"),
                require("../../../assets/images/photography/snow/fourteen.jpg"),
                require("../../../assets/images/photography/snow/fifteen.jpg"),
                require("../../../assets/images/photography/snow/sixteen.jpg"),
                require("../../../assets/images/photography/snow/seventeen.jpg"),
                require("../../../assets/images/photography/snow/nineteen.jpg"),
                require("../../../assets/images/photography/snow/twenty.jpg"),
                require("../../../assets/images/photography/snow/twentyone.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Snow;
