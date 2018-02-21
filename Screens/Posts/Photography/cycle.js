import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Cycle extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Cycle Fest"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/cyclefest/one.jpg"),
                require("../../../assets/images/photography/cyclefest/two.jpg"),
                require("../../../assets/images/photography/cyclefest/three.jpg"),
                require("../../../assets/images/photography/cyclefest/four.jpg"),
                require("../../../assets/images/photography/cyclefest/five.jpg"),
                require("../../../assets/images/photography/cyclefest/six.jpg"),
                require("../../../assets/images/photography/cyclefest/seven.jpg"),
                require("../../../assets/images/photography/cyclefest/eight.jpg"),
                require("../../../assets/images/photography/cyclefest/nine.jpg"),
                require("../../../assets/images/photography/cyclefest/ten.jpg"),
                require("../../../assets/images/photography/cyclefest/eleven.jpg"),
                require("../../../assets/images/photography/cyclefest/twelve.jpg"),
                require("../../../assets/images/photography/cyclefest/thirteen.jpg"),
                require("../../../assets/images/photography/cyclefest/fourteen.jpg"),
                require("../../../assets/images/photography/cyclefest/fifteen.jpg"),
                require("../../../assets/images/photography/cyclefest/sixteen.jpg"),
                require("../../../assets/images/photography/cyclefest/seventeen.jpg"),
                require("../../../assets/images/photography/cyclefest/eighteen.jpg"),
                require("../../../assets/images/photography/cyclefest/nineteen.jpg"),
                require("../../../assets/images/photography/cyclefest/twenty.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Cycle;
