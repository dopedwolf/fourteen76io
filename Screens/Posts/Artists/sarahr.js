import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Sarah extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Sarah C. Rehmert"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Interview by Ahmad Jackson</Text>
              <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/sarahhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"So what brought about the tea princess?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"To put it simply, I love tea. I always drink it when I make art or have to focus on a task because it helps my productivity. Honestly, I hadn't thought about this until you asked about it, but tea is often what inspires me to draw tiny, vibrant, flowers. Really, the handle tea princess has a sweet, feminine, ring to it."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/sarah/one.jpg"),
                require("../../../assets/images/artists/sarah/two.jpg"),
                require("../../../assets/images/artists/sarah/three.jpg"),
                require("../../../assets/images/artists/sarah/four.jpg"),
                require("../../../assets/images/artists/sarah/five.jpg"),
                require("../../../assets/images/artists/sarah/six.jpg"),
                require("../../../assets/images/artists/sarah/seven.jpg"),
                require("../../../assets/images/artists/sarah/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"The overall color scheme is fascinating--the violets and blues make for fantastic contrast. There's a feeling of alienation and potential sorrow that arises from it. Why that particular scheme?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"There's something very emotional about seeing those colors occur in nature. It's a fleeting, magical, moment, because I usually only see them around dusk or dawn. They sort of signify an end to me. I always wish I could touch the scenery or be engulfed by it, but all I can do is watch it fade as the day shifts into night or vice versa. The unsettling feeling of my own smallness and inability to be a part of something so beautiful is what really inspires me."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"There's definitely a feminist theme of sisterly bonding and sisterly suffering. A reclamation of power. A feminine access to the divine. Can you tell me more about that? Especially using some childhood-associated images?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I'm the older sister, so when I was growing up I always felt that it was up to me to be strong, especially for my little sister. I think some of my female-oriented art reflects the regret I have for not being closer to her when I could have been. My family moved away right when I started college, and not a day goes by that don't wish I had held her a little tighter when I had the chance. A lot of my art is very sorrow-themed, and I really can't imagine a greater sorrow than feeling something you love dearly slip away. In several of my other pieces I try to make up for that sadness by illustrating these 'wild' devil-women. They're powerful succubi who are overcoming that sadness and reaching a higher potential."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Final question? What's your favorite Crystal Gem?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"Definitely Lapis Lazuli! I love how the creators of the show made up for her suffering and sad backstory by giving her fearsome powers. She's a force to be reckoned with, for sure."}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/_teaprincess/')}>
                      {' Sarah C. Rehmert'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Sarah;
