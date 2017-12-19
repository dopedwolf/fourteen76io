import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Amy extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Amy Vaughn"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/amy/one.jpg"),
                require("../../../assets/images/artists/amy/two.jpg"),
                require("../../../assets/images/artists/amy/three.jpg"),
                require("../../../assets/images/artists/amy/four.jpg"),
                require("../../../assets/images/artists/amy/five.jpg"),
                require("../../../assets/images/artists/amy/six.jpg"),
                require("../../../assets/images/artists/amy/seven.jpg"),
                require("../../../assets/images/artists/amy/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.amyvaughn.bigcartel.com/')}>
                  {' amyvaughn.bigcartel'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/amy__vaughn/')}>
                    {' Amy Vaughn'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Amy;
