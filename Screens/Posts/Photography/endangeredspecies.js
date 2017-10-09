import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Endangeredspecies extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Endangered Species"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Josh Ethan Johnson</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/endangered_species/one.jpg"),
                require("../../../assets/images/photography/endangered_species/two.jpg"),
                require("../../../assets/images/photography/endangered_species/three.jpg"),
                require("../../../assets/images/photography/endangered_species/four.jpg"),
                require("../../../assets/images/photography/endangered_species/five.jpg"),
                require("../../../assets/images/photography/endangered_species/six.jpg"),
                require("../../../assets/images/photography/endangered_species/seven.jpg"),
                require("../../../assets/images/photography/endangered_species/eight.jpg"),
                require("../../../assets/images/photography/endangered_species/nine.jpg"),
                require("../../../assets/images/photography/endangered_species/ten.jpg"),
                require("../../../assets/images/photography/endangered_species/eleven.jpg"),
                require("../../../assets/images/photography/endangered_species/twelve.jpg"),
                require("../../../assets/images/photography/endangered_species/thirteen.jpg"),
                require("../../../assets/images/photography/endangered_species/fourteen.jpg"),
                require("../../../assets/images/photography/endangered_species/fifteen.jpg"),
                require("../../../assets/images/photography/endangered_species/sixteen.jpg"),
                require("../../../assets/images/photography/endangered_species/seventeen.jpg"),
                require("../../../assets/images/photography/endangered_species/eighteen.jpg"),
                require("../../../assets/images/photography/endangered_species/nineteen.jpg"),
                require("../../../assets/images/photography/endangered_species/twenty.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Endangered Species is a collection of photographs by Josh Ethan Johnson taken over a 16 year period. The book is a study in the speed and impermanence culture. While most of the photos are taken in America and NYC specifically, the book is more a look at human behavior and culture versus countries."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>{"Curated from thousands of of photographs, Josh methodically documented interesting and rare people, places, and things with these themes in mind. Some subjects were the last remaining of their respective archetype and are already gone. Others may soon be. Endangered Species attempts to both preserve as well as juxtapose them against the current trends people are likely blind to."}</Text>
            <Text style={Cstyles.photoSeriesDescription}>{"This is the first installment of many more Endangered Species to come"}</Text>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/josh_ethan_johnson/')}>
                  {' Josh Ethan Johnson'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Endangeredspecies;
