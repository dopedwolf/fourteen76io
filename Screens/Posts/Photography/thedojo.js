import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Thedojo extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"The Dojo"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>William Webb</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/dojo/one.jpg"),
                require("../../../assets/images/photography/dojo/two.jpg"),
                require("../../../assets/images/photography/dojo/three.jpg"),
                require("../../../assets/images/photography/dojo/four.jpg"),
                require("../../../assets/images/photography/dojo/five.jpg"),
                require("../../../assets/images/photography/dojo/six.jpg"),
                require("../../../assets/images/photography/dojo/seven.jpg"),
                require("../../../assets/images/photography/dojo/eight.jpg"),
                require("../../../assets/images/photography/dojo/nine.jpg"),
                require("../../../assets/images/photography/dojo/ten.jpg"),
                require("../../../assets/images/photography/dojo/twelve.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/williamwebb_/')}>
                      {' William Webb'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Thedojo;
