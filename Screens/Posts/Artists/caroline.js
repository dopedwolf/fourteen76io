import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Caroline extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Caroline Erb"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/caroline_erb/one.jpg"),
                require("../../../assets/images/artists/caroline_erb/two.jpg"),
                require("../../../assets/images/artists/caroline_erb/three.jpg"),
                require("../../../assets/images/artists/caroline_erb/four.jpg"),
                require("../../../assets/images/artists/caroline_erb/five.jpg"),
                require("../../../assets/images/artists/caroline_erb/six.jpg"),
                require("../../../assets/images/artists/caroline_erb/seven.jpg"),
                require("../../../assets/images/artists/caroline_erb/eight.jpg"),
                require("../../../assets/images/artists/caroline_erb/nine.jpg"),
                require("../../../assets/images/artists/caroline_erb/ten.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>{"I use my art as a coping mechanism - it helps me process overwhelming or uncomfortable emotions. A constant theme for me is trying to find a balance between vulnerability and vagueness. I seesaw a lot between emotional transparency and distance, and am currently re-examing what it is I want to reveal in my art. People have used the word 'intimate' quite frequently to describe what I do, and I think it makes some people uncomfortable to see art like mine in public spaces."}</Text>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.etsy.com/shop/oddbirditems')}>
                    {' Strange Bird Shop'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Caroline;
