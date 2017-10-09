import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Blacklivesmatter extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Black Lives Matter Protest"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/blm/one.jpg"),
                require("../../../assets/images/photography/blm/two.jpg"),
                require("../../../assets/images/photography/blm/three.jpg"),
                require("../../../assets/images/photography/blm/four.jpg"),
                require("../../../assets/images/photography/blm/five.jpg"),
                require("../../../assets/images/photography/blm/six.jpg"),
                require("../../../assets/images/photography/blm/seven.jpg"),
                require("../../../assets/images/photography/blm/eight.jpg"),
                require("../../../assets/images/photography/blm/nine.jpg"),
                require("../../../assets/images/photography/blm/ten.jpg"),
                require("../../../assets/images/photography/blm/eleven.jpg"),
                require("../../../assets/images/photography/blm/twelve.jpg"),
                require("../../../assets/images/photography/blm/thirteen.jpg"),
                require("../../../assets/images/photography/blm/fourteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Blacklivesmatter;
