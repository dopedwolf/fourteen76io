import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Gumbo extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Gumbo Gala"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Lee Panter</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/gumbo/one.jpg"),
                require("../../../assets/images/photography/gumbo/two.jpg"),
                require("../../../assets/images/photography/gumbo/three.jpg"),
                require("../../../assets/images/photography/gumbo/four.jpg"),
                require("../../../assets/images/photography/gumbo/five.jpg"),
                require("../../../assets/images/photography/gumbo/six.jpg"),
                require("../../../assets/images/photography/gumbo/seven.jpg"),
                require("../../../assets/images/photography/gumbo/eight.jpg"),
                require("../../../assets/images/photography/gumbo/nine.jpg"),
                require("../../../assets/images/photography/gumbo/ten.jpg"),
                require("../../../assets/images/photography/gumbo/eleven.jpg"),
                require("../../../assets/images/photography/gumbo/twelve.jpg"),
                require("../../../assets/images/photography/gumbo/thirteen.jpg"),
                require("../../../assets/images/photography/gumbo/fourteen.jpg"),
                require("../../../assets/images/photography/gumbo/fifteen.jpg"),
                require("../../../assets/images/photography/gumbo/sixteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Gumbo;
