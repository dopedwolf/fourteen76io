import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Yoavpelli extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Yoav Pelli"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/yoav/one.jpg"),
                require("../../../assets/images/photography/yoav/two.jpg"),
                require("../../../assets/images/photography/yoav/three.jpg"),
                require("../../../assets/images/photography/yoav/four.jpg"),
                require("../../../assets/images/photography/yoav/five.jpg"),
                require("../../../assets/images/photography/yoav/six.jpg"),
                require("../../../assets/images/photography/yoav/seven.jpg"),
                require("../../../assets/images/photography/yoav/nine.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/pelliyoav/')}>
                    {' Yoav Pelli'}
                </Text>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Yoavpelli;
