import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Womensmarch extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Women's March"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/womensMarch/one.jpg"),
                require("../../../assets/images/photography/womensMarch/two.jpg"),
                require("../../../assets/images/photography/womensMarch/three.jpg"),
                require("../../../assets/images/photography/womensMarch/four.jpg"),
                require("../../../assets/images/photography/womensMarch/five.jpg"),
                require("../../../assets/images/photography/womensMarch/six.jpg"),
                require("../../../assets/images/photography/womensMarch/seven.jpg"),
                require("../../../assets/images/photography/womensMarch/eight.jpg"),
                require("../../../assets/images/photography/womensMarch/nine.jpg"),
                require("../../../assets/images/photography/womensMarch/ten.jpg"),
                require("../../../assets/images/photography/womensMarch/eleven.jpg"),
                require("../../../assets/images/photography/womensMarch/twelve.jpg"),
                require("../../../assets/images/photography/womensMarch/thirteen.jpg"),
                require("../../../assets/images/photography/womensMarch/fourteen.jpg"),
                require("../../../assets/images/photography/womensMarch/fifteen.jpg"),
                require("../../../assets/images/photography/womensMarch/seventeen.jpg"),
                require("../../../assets/images/photography/womensMarch/sixteen.jpg"),
                require("../../../assets/images/photography/womensMarch/seventeen.jpg"),
                require("../../../assets/images/photography/womensMarch/eighteen.jpg"),
                require("../../../assets/images/photography/womensMarch/nineteen.jpg"),
                require("../../../assets/images/photography/womensMarch/twenty.jpg"),
                require("../../../assets/images/photography/womensMarch/twentyone.jpg"),
                require("../../../assets/images/photography/womensMarch/twentyfour.jpg"),
                require("../../../assets/images/photography/womensMarch/twentythree.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Womensmarch;
