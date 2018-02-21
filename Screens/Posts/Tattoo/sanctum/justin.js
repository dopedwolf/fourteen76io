import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../../styles/common';
import ImageSlider from '../../../Slider/slider';


class JustinTat extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../../assets/images/tattoo/sanctum/justinhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Justin Kontzen"}</Text>
              </View>
              <ImageSlider images={[
                  require("../../../../assets/images/tattoo/sanctum/justin/one.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/justin/two.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/justin/three.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/justin/four.jpg"),
                  require("../../../../assets/images/tattoo/sanctum/justin/five.jpg"),
                ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = JustinTat;
