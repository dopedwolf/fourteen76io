import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Pride extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Pride Parade and Fest"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/pride17/ten.jpg"),
                require("../../../assets/images/photography/pride17/eleven.jpg"),
                require("../../../assets/images/photography/pride17/twelve.jpg"),
                require("../../../assets/images/photography/pride17/thirteen.jpg"),
                require("../../../assets/images/photography/pride17/fourteen.jpg"),
                require("../../../assets/images/photography/pride17/fifteen.jpg"),
                require("../../../assets/images/photography/pride17/sixteen.jpg"),
                require("../../../assets/images/photography/pride17/seventeen.jpg"),
                require("../../../assets/images/photography/pride17/eighteen.jpg"),
                require("../../../assets/images/photography/pride17/nineteen.jpg"),
                require("../../../assets/images/photography/pride17/twenty.jpg"),
                require("../../../assets/images/photography/pride17/twentyone.jpg"),
                require("../../../assets/images/photography/pride17/twentytwo.jpg"),
                require("../../../assets/images/photography/pride17/one.jpg"),
                require("../../../assets/images/photography/pride17/two.jpg"),
                require("../../../assets/images/photography/pride17/three.jpg"),
                require("../../../assets/images/photography/pride17/four.jpg"),
                require("../../../assets/images/photography/pride17/five.jpg"),
                require("../../../assets/images/photography/pride17/six.jpg"),
                require("../../../assets/images/photography/pride17/seven.jpg"),
                require("../../../assets/images/photography/pride17/eight.jpg"),
                require("../../../assets/images/photography/pride17/nine.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Pride;
