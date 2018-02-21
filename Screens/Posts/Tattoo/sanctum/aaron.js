import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../../styles/common';
import ImageSlider from '../../../Slider/slider';


class AaronTat extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../../assets/images/tattoo/sanctum/aaronhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Aaron Hamilton"}</Text>
              </View>
              <ImageSlider images={[
                  require("../../../../assets/images/tattoo/sanctum/aaron/one.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/aaron/two.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/aaron/three.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/aaron/four.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/aaron/five.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/aaron/six.jpg"),
                ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = AaronTat;
