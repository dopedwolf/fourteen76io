import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../../styles/common';
import ImageSlider from '../../../Slider/slider';


class RizzoTat extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <Image source={require('../../../../assets/images/tattoo/tripletwo/rizzo.jpg')} style={Cstyles.articleHeadImagePortrait}/>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Vincent Rizzo"}</Text>
              </View>
              <ImageSlider images={[
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/one.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/two.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/three.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/four.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/five.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/six.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/seven.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/eight.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/rizzo/nine.jpg"),
                ]} style={Cstyles.imageSliderP}></ImageSlider>
              </View>

          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = RizzoTat;
