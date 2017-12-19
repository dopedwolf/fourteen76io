import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Zine extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Zine"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Daniel Lawson</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/daniel/one.png"),
                require("../../../assets/images/photography/daniel/three.png"),
                require("../../../assets/images/photography/daniel/four.png"),
                require("../../../assets/images/photography/daniel/five.png"),
                require("../../../assets/images/photography/daniel/six.png"),
                require("../../../assets/images/photography/daniel/seven.png"),
                require("../../../assets/images/photography/daniel/eight.png"),
                require("../../../assets/images/photography/daniel/nine.png"),
                require("../../../assets/images/photography/daniel/ten.png"),
                require("../../../assets/images/photography/daniel/eleven.png"),
                require("../../../assets/images/photography/daniel/twelve.png"),
                require("../../../assets/images/photography/daniel/thirteen.png"),
                require("../../../assets/images/photography/daniel/fourteen.png"),
                require("../../../assets/images/photography/daniel/fifteen.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Zine;
