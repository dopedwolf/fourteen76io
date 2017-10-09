import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Andrea extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Andrea Really"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/andreahead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Psychedelic themes are pretty apparent in your work; synesthesia, warped space, lush colors, etc. Do you find your art to be concerned primarily with the realms of psychedelia?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It’s easy to gather that psychedelia has its influence on my work, and that’s all there is to it. I am not conceptually concerned with psychedelia, and lately I’ve been trying to keep my content further away from it. My bold and whimsical style is so inherent that it’s nearly impossible for me to stay from it. So, I push to keep my paintings in the realm of contemporary folk/pop-surrealism rather than being just psychedelic. I’m definitely not trying to make “trippy” art for festivals and mellow mushrooms, although my style seems to be well received in that context anyway (haha)."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/andrea/one.png"),
                require("../../../assets/images/artists/andrea/two.png"),
                require("../../../assets/images/artists/andrea/three.png"),
                require("../../../assets/images/artists/andrea/four.png"),
                require("../../../assets/images/artists/andrea/five.png"),
                require("../../../assets/images/artists/andrea/six.png"),
                require("../../../assets/images/artists/andrea/seven.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Your pieces seem to incorporate lots of intimate, sometimes tense, motion and touch. Have these themes always been present in your work?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Yes, and I love it when people read that sort of sensation in my work. The term “visceral” gets thrown around a lot in the art world but it’s something I always keep in mind when selecting imagery. I use bodies, body parts, motion, tension, and gooey organic content in an attempt to somewhat push the viewers buttons and give them a deep, physical, gut reaction. My favorite art makes me subconsciously feel, twitch, move, tighten, giggle, gag, and breathe with the piece, and I want my work to give people that same experience before they even have time to delve into their intellectual reaction. I try to accomplish this in both my paintings and my videos. I get a lot of feedback about my work being either unsettlingly grotesque, sensually erotic, or euphorically playful, and I am very happy with any of these readings!"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What would you consider your most formative years as an artist so far?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    I hope that I can always answer this question by saying the last few, because I want my growth as an artist to be exponential. I graduated with my BFA from the University of Montevallo less than a year ago, and my last two years at that school were definitely full of more artistic productivity and discovery than any other point in my life. I had so much time on my hands, was in such an open minded and creative environment, and was constantly being fed new ideas and new projects. A good art school is an absolutely fantastic experience and I’m pining to continue my education in graduate school. Thankfully my growth hasn’t stopped in my post grad life. There’s no one to challenge me with projects and ideas other than myself, and I’ve chosen to do just that. I’ve been spending a lot of time discovering different aspects of my style and abilities, experimenting with mediums, getting involved in the creative community, vending, booking shows, and studying the art world and its history on my own. Sure, I’m kind of doing it in manic fear of existential dread and purposelessness (hahaha), but it gives me peace of mind. It’s all I have now.
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What era/artist has had the largest impact on your work?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"While most people would consider me a painter/illustrator first (it is, after all, the easiest way to feed people your work), I am completely obsessed with video and performance art. That’s the stuff that gives me a serious cerebral hard-on. From the hidden gems of Fluxus films and happenings recorded on Portapak, to the all-stars like Marina Abramovic, Joseph Beuys, Nam June-Paik, Bill Viola, etc - I absolutely love it all. As far as painting and illustration goes, I’ve lately enjoyed soaking up inspiration from the clean and colorful imagery of designers like Luke Pelletier, Mike Perry, Marcello Velho, Jack Sachs, and Clay Hickson. My current artist of great obsession, though, is Zio Ziegler. Seriously, go check his stuff out. He’s so young and so deep into his career, and he’s pumping out work like a machine. His paintings resonate with me so much that I feel physically angry for not making them myself. It’s too good."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Why art?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"Why anything...?"}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/andreareally/')}>
                      {' Andrea Really'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Andrea;
