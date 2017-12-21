import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class TwelveWeeks extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Twelve Weeks of Winter"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Antonio Rodriguez</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/twelve/one.jpg"),
                require("../../../assets/images/photography/twelve/two.jpg"),
                require("../../../assets/images/photography/twelve/three.jpg"),
                require("../../../assets/images/photography/twelve/four.jpg"),
                require("../../../assets/images/photography/twelve/five.jpg"),
                require("../../../assets/images/photography/twelve/six.jpg"),
                require("../../../assets/images/photography/twelve/seven.jpg"),
                require("../../../assets/images/photography/twelve/eight.jpg"),
                require("../../../assets/images/photography/twelve/nine.jpg"),
                require("../../../assets/images/photography/twelve/ten.jpg"),
                require("../../../assets/images/photography/twelve/eleven.jpg"),
                require("../../../assets/images/photography/twelve/twelve.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = TwelveWeeks;
