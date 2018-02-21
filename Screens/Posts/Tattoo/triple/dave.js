import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../../styles/common';
import ImageSlider from '../../../Slider/slider';


class DaveTat extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../../assets/images/tattoo/tripletwo/dave.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Dave Rankin"}</Text>
              </View>
              <ImageSlider images={[
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave1.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave2.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave3.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave4.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave5.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave6.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave7.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave8.jpg"),
                  require("../../../../assets/images/tattoo/tripletwo/dave/dave9.jpg"),
                ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = DaveTat;
