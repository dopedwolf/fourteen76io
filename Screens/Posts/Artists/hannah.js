import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Hannah extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Hannah Barrett"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/hannah.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What medium do you most identify with?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I would have to say photography, painting and mixed media/collage type stuff as well. I really enjoy seeing elements of this photographic world intertwine with surreal abstractions of the mind, challenging one’s sense of reality"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"You take detailed landscapes and human form and abstract them, and in the case of 'FACES', both at the same time, unraveling then lacing the two back together. Is this a binding theme or just coincidence?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It’s probably a subconscious theme. When I started school I had a strong interest in photography. Then I began painting which lead me to use a lot of my photography as subject matter. Towards then end of school I began to experiment with combing the realistic elements of photography with surreal abstractions and shapes formed with paint or other mediums. Now that I’m out of school and do not have assigned projects I tend to work without knowing what I’m creating, so I usually find myself intertwining these two elements"}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/hanna/one.jpg"),
                require("../../../assets/images/artists/hanna/twp.jpg"),
                require("../../../assets/images/artists/hanna/three.jpg"),
                require("../../../assets/images/artists/hanna/four.jpg"),
                require("../../../assets/images/artists/hanna/five.jpg"),
                require("../../../assets/images/artists/hanna/six.jpg"),
                require("../../../assets/images/artists/hanna/seven.jpg"),
                require("../../../assets/images/artists/hanna/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Nature is in no need of man. Is man in need of nature?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Definitely. It is medicine for the soul. With all the smart phones and smart things constantly telling us everything its so easy to forget how to just be. The best way to remember is to immerse yourself into nature and leave the smart stuff behind"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Favorite or most inspirational place?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"My grandparents' cabin on Lake Martin. It’s on this perfect peninsula surrounded by water with the sun rising and setting on either side. So many memories made there, from learning how to swim to throwing some crazy parties. It's a place that will always bring an overwhelming feeling of comfort"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Coors Banquet or PBR?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"PBR all the way"}</Text>
                    <Text style={Cstyles.articleBodyQuestion}>
                      {"What super power would you have and why?"}
                    </Text>
                    <Text style={Cstyles.articleBodyContent}>{"Being able to fly. First of all i love being off the ground, whether it be climbing up a 70ft rock face, or hanging from a trapeze so being able to fly would be right up my ally. Secondly, i could just dip out of any situation. BYE"}</Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Hannah;
