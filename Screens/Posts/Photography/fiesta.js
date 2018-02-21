import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Fiesta extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Fiesta Birmingham"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/fiesta/one.jpg"),
                require("../../../assets/images/photography/fiesta/two.jpg"),
                require("../../../assets/images/photography/fiesta/three.jpg"),
                require("../../../assets/images/photography/fiesta/four.jpg"),
                require("../../../assets/images/photography/fiesta/five.jpg"),
                require("../../../assets/images/photography/fiesta/six.jpg"),
                require("../../../assets/images/photography/fiesta/seven.jpg"),
                require("../../../assets/images/photography/fiesta/eight.jpg"),
                require("../../../assets/images/photography/fiesta/nine.jpg"),
                require("../../../assets/images/photography/fiesta/ten.jpg"),
                require("../../../assets/images/photography/fiesta/eleven.jpg"),
                require("../../../assets/images/photography/fiesta/twelve.jpg"),
                require("../../../assets/images/photography/fiesta/thirteen.jpg"),
                require("../../../assets/images/photography/fiesta/fourteen.jpg"),
                require("../../../assets/images/photography/fiesta/fifteen.jpg"),
                require("../../../assets/images/photography/fiesta/sixteen.jpg"),
                require("../../../assets/images/photography/fiesta/seventeen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Fiesta;
