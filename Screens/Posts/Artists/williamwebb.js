import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class William extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"William Webb"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Interview by Jonathan Patrick</Text>
              <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/williamhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Your choice to include the canvas and borders in some of this series exposes your process. Was this choice, to quote Bob Ross, a 'happy accident', premeditated, or a little of both?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I would say my choice to include the borders in some of the pieces was a little of both. Most of my work is very process oriented. I had been making paintings from roll canvas with the intention to stretch the paintings, eventually. After I finished a few works from an on going series I have named, Urban Gestures, I realized that the border and frayed edges where as much of the final piece as the painting itself. I feel it further emphasizes the process of painting, which is very important to me."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/william/one.jpg"),
                require("../../../assets/images/artists/william/two.jpg"),
                require("../../../assets/images/artists/william/four.jpg"),
                require("../../../assets/images/artists/william/five.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Willem de Kooning or Mark Rothko?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Both have been very influential in my work, as well as many other members of the Abstract Expressionist. I would have to say my largest influence has been the work of Bill de Kooning. His color pallet, brushstroke, and layered process is very evident in my work. Like most of the ABEX, Bill questioned academic painting and the standards that had been set for painters. He focused on the act of painting not the final 'beautiful' image, that had been desired by his predecessors, which are just a few things that attracted me to de Kooning's work."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Urban environments and cityscapes seem to be the central theme to this series. As a skater, would you say skate spots and graffiti you've scoped out have seeped into your work?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"As skater you develop a complex understanding of space. I always say we look at the world through a skateboarding perspective, which means we are constantly scanning our surroundings for anything and everything that could be skated. A little bump in the sidewalk, a ledge on the side of a building, a rail against the wall in an alley, a grate to fire hydrant, anything. We actively put ourselves into the urban environment and typically into the less desirable areas, which tends to be where graffiti thrives. I would say the skateboarding perspective and lifestyle is an enviable influence in my work."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"In this series, I wanted to use that spacial understanding I've developed as a skateboarder to create my own urban environments while using active marks that have been directly influenced by graffiti."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/williamwebb_/')}>
                      {' William Webb'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = William;
