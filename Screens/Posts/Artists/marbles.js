import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Marbles extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Mr Marbles"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/mrmarbles/one.jpg"),
                require("../../../assets/images/artists/mrmarbles/two.jpg"),
                require("../../../assets/images/artists/mrmarbles/three.jpg"),
                require("../../../assets/images/artists/mrmarbles/four.jpg"),
                require("../../../assets/images/artists/mrmarbles/five.jpg"),
                require("../../../assets/images/artists/mrmarbles/six.jpg"),
                require("../../../assets/images/artists/mrmarbles/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.mrmarbles.co.uk/')}>
                  {' mrmarbles.co.uk'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/mrmarblesart/')}>
                    {' Mr Marbles'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Marbles;
