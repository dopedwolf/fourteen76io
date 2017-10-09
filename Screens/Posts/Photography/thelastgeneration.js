import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Thelastgeneration extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"The Last Generation"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Eduardo Urbina</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/eduardo/one.jpg"),
                require("../../../assets/images/photography/eduardo/two.jpg"),
                require("../../../assets/images/photography/eduardo/three.jpg"),
                require("../../../assets/images/photography/eduardo/four.jpg"),
                require("../../../assets/images/photography/eduardo/five.jpg"),
                require("../../../assets/images/photography/eduardo/six.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/indigenousone/')}>
                    {' Eduardo Urbina'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Thelastgeneration;
