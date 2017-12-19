import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Ygt extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Young The Giant"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Mary Fehr</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/music/ygt/one.jpg"),
                require("../../../assets/images/music/ygt/two.jpg"),
                require("../../../assets/images/music/ygt/three.jpg"),
                require("../../../assets/images/music/ygt/four.jpg"),
                require("../../../assets/images/music/ygt/five.jpg"),
                require("../../../assets/images/music/ygt/six.jpg"),
                require("../../../assets/images/music/ygt/seven.jpg"),
                require("../../../assets/images/music/ygt/eight.jpg"),
                require("../../../assets/images/music/ygt/nine.jpg"),
                require("../../../assets/images/music/ygt/ten.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.mfehrphotography.com/')}>
                    {' mfehrphotography.com'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/marycfehr/')}>
                      {' Mary Fehr'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Ygt;
