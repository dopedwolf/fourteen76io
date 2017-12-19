import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Nonames extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Where The Streets Have No Names"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Tyron Hug</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/tyron/one.jpg"),
                require("../../../assets/images/photography/tyron/two.jpg"),
                require("../../../assets/images/photography/tyron/three.jpg"),
                require("../../../assets/images/photography/tyron/four.jpg"),
                require("../../../assets/images/photography/tyron/five.jpg"),
                require("../../../assets/images/photography/tyron/six.jpg"),
                require("../../../assets/images/photography/tyron/seven.jpg"),
                require("../../../assets/images/photography/tyron/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://ahuglife.tumblr.com/')}>
                      {' ahuglife.tumblr'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/t_hug/')}>
                      {' Tyron Hug'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Nonames;
