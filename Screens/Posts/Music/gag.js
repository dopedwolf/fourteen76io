import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Gag extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"GAG"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Elliott Moe</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/music/gag/one.png"),
                require("../../../assets/images/music/gag/two.png"),
                require("../../../assets/images/music/gag/three.png"),
                require("../../../assets/images/music/gag/four.png"),
                require("../../../assets/images/music/gag/five.png"),
                require("../../../assets/images/music/gag/six.png"),
                require("../../../assets/images/music/gag/seven.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Gag;
