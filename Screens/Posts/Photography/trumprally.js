import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class TrumpRally extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Trump Rally"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mateo Montoya</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/trump/one.jpg"),
                require("../../../assets/images/photography/trump/one1.jpg"),
                require("../../../assets/images/photography/trump/one2.jpg"),
                require("../../../assets/images/photography/trump/one3.jpg"),
                require("../../../assets/images/photography/trump/two.jpg"),
                require("../../../assets/images/photography/trump/three.jpg"),
                require("../../../assets/images/photography/trump/four.jpg"),
                require("../../../assets/images/photography/trump/six.jpg"),
                require("../../../assets/images/photography/trump/seven.jpg"),
                require("../../../assets/images/photography/trump/eight.jpg"),
                require("../../../assets/images/photography/trump/nine.jpg"),
                require("../../../assets/images/photography/trump/ten.jpg"),
                require("../../../assets/images/photography/trump/eleven.jpg"),
                require("../../../assets/images/photography/trump/twelve.jpg"),
                require("../../../assets/images/photography/trump/thirteen.jpg"),
                require("../../../assets/images/photography/trump/fourteen.jpg"),
                require("../../../assets/images/photography/trump/fifteen.jpg"),
                require("../../../assets/images/photography/trump/sixteen.jpg"),
                require("../../../assets/images/photography/trump/seventeen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = TrumpRally;
