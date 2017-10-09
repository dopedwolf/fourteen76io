import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Thomashall extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Thomas Hall"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/thomas/one.jpg"),
                require("../../../assets/images/photography/thomas/two.jpg"),
                require("../../../assets/images/photography/thomas/three.jpg"),
                require("../../../assets/images/photography/thomas/four.jpg"),
                require("../../../assets/images/photography/thomas/five.jpg"),
                require("../../../assets/images/photography/thomas/six.jpg"),
                require("../../../assets/images/photography/thomas/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/thfilm22/')}>
                      {' Thomas Hall'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Thomashall;
