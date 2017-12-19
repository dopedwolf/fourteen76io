import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Rizzo extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Rizzo"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/rizzo.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"I see a heavy influence of Japanese spirituality, (Shinto and Buddhism I believe)? How did that come about?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"You're absolutely right. Over the past few years I've taken a very heavy influence from Buddhist ideologies, and eastern philosophy in general. There are a few classes I've taken in my studies that have really helped me identify the ideas that I wish to process, create, and generate work from. I think my interest in unveiling a sense of peace in my every-day started at an early age, though it didn't start to take visual form in my work until pretty recently. Drawing ideas, both literally and figuratively, from Buddhist and eastern ideologies has been a huge part of my process for the past few years."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/rizzo/one.jpg"),
                require("../../../assets/images/artists/rizzo/two.jpg"),
                require("../../../assets/images/artists/rizzo/three.jpg"),
                require("../../../assets/images/artists/rizzo/four.jpg"),
                require("../../../assets/images/artists/rizzo/five.jpg"),
                require("../../../assets/images/artists/rizzo/six.jpg"),
                require("../../../assets/images/artists/rizzo/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"You seem to meld that influence with a love of old school graffiti and tagging culture? Can you tell us more about that?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Sure. When it comes down to it, I am putting the things I truly enjoy into one. I have always enjoyed the way graffiti exists on it's own accord. There's really nothing like it. The style, way it looks, where it's at, how, why and when it got there, and who did it all became very interesting to me at a younger age. I have always looked up to those behind the scenes... Artists that are making incredible work yet living in the shadows, their identities shrouded in mystery. The acceptance that they face knowing the work they've created may not live on. That sense of detachment is humbling in a way. This influence from graffiti definitely stems from a love for drawing typography as well. So, it's had an immense impact on me and what I generate."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"We're picking up a little weary agnosticism? This feeling of quelling the spirit in the face of potential greater powers? A sense of acceptance with powerlessness?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I'm glad you see that. Spirituality, and the perspective it provides me, are huge forces that keep me going. Although I am not at all specifically religious, the perspective I have gained is a major part of me as a person and has aided in far more than just my artistic endeavors. Learning to fully detach is a major concept in meditation, and acceptance with powerlessness is a part of that. Meditation plays a huge part in making my work. The idea of quelling the spirit comes from these concepts of meditation and detachment as well. Letting go, consciously breathing and enjoying, even in the face of potential greater powers, good or bad, is a part of this bizarre thing we call life."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Keith Haring or Banksy?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Haring, without a doubt."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Pop-locking or breakdancing?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"Might go with breakdancing, but let loose and dance how ya feel is what I'm saying!"}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/r.izzo/')}>
                      {' Rizzo'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Rizzo;
