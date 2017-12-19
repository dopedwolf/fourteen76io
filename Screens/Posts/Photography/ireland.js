import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Ireland extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Ireland"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Rachel McElroy</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/rachel/one.jpg"),
                require("../../../assets/images/photography/rachel/two.jpg"),
                require("../../../assets/images/photography/rachel/three.jpg"),
                require("../../../assets/images/photography/rachel/four.jpg"),
                require("../../../assets/images/photography/rachel/five.jpg"),
                require("../../../assets/images/photography/rachel/six.jpg"),
                require("../../../assets/images/photography/rachel/seven.jpg"),
                require("../../../assets/images/photography/rachel/eight.jpg"),
                require("../../../assets/images/photography/rachel/nine.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.rachelmcelroy.com/')}>
                      {' rachelmcelroy.com'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/preraphaelite/')}>
                      {' Rachel McElroy'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Ireland;
