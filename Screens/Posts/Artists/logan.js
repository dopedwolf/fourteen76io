import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Logan extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Logan Tanner"}</Text>
              <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/loganhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"For your work with pixels, you use Microsoft Paint, correct?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I'm not that masochistic. I used MSPaint for years until I realized that there were programs designed specifically for pixel art. These days I make all of my pixel art using Grafx2, which is modelled after a classic pixel art program called DeluxePaint that originally debuted on the Commodore Amiga, before I was born. A good pixel art program will make things much more efficient, which is vital in such a tedious medium."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/loganart/one.png"),
                require("../../../assets/images/artists/loganart/two.png"),
                require("../../../assets/images/artists/loganart/three.png"),
                require("../../../assets/images/artists/loganart/four.png"),
                require("../../../assets/images/artists/loganart/five.png"),
                require("../../../assets/images/artists/loganart/six.png"),
                require("../../../assets/images/artists/loganart/seven.png"),
                require("../../../assets/images/artists/loganart/eight.png"),
                require("../../../assets/images/artists/loganart/nine.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Scrolling through forums like pixel joint, I see there are lots of truly talented pixel artists out there. Though you're the first I've seen using the medium so extensively in the realm of Fine Art. Personally, I'm a fan, though I can't help but wonder if you've caught any flack from the art world for using a medium some may classify as 'low brow' or 'post-internet', especially in regard to more minimal pieces like 'Walk the Plank'."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"It's interesting that you mention 'Walk the Plank', because it's an homage to a painting by Roy Lichtenstein. I'm not really a huge fan of Lichtenstein's work, but he was pushing the boundaries of fine art back in the 60's with Pop Art based on comic books. So that door has been opened for me, the difference is I'm using pixels instead of Ben-Day dots. 'Walk the Plank' is also a special case in that it's a direct reference to video games, which is fortunate, because people are going to think of video games as soon as they see the pixels. The difficulty comes with creating something that maintains a pixelly aesthetic without reminding people of Mario and Minecraft, or seeming like a cheap plea to the viewer's nostalgia."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"From paints to pixels to sculpture, you seem to be quite the versatile dude. How would you say multimedia has enriched and influenced your creative process?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"There's a lot of cross-pollination. When I started painting, I carried over what I learned from pixel art about color theory and palette management. After learning how to paint, I translated some of my paintings into pixel art, which gives them a fluidity that I think is difficult to achieve with a computer alone. And lately I've been experimenting with printing out pixel art on canvas, then painting on top of it. And all the while, sculpture has helped me think about form when I paint and pixel. It's a constant conversation."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Polluck or potluck?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I saw Pollock's work in Atlanta a few years back (on loan from the MoMA). It blew me away. Since I paint representationally, people sometimes assume I must not like Abstract Expressionism, and they feel free to tell me how their kid can paint better than the schlock they see in museums. Phillistines! Begone! Potlucks, though... church potlucks were such a huge part of my upbringing. Like those oldschool hymns I still find myself inadvertently humming. Churches these days have mostly replaced the organs with 4-piece rock bands, and order pizzas instead of organizing potlucks. It's a shame, the music is so shallow and the food so impersonal. This one is a tie, I think."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {'"Relics", "Hog", and "Newt" have a particular honesty about them in reference to the South. Do you have any sort of intention when you portray Southern American moments like these?'}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{'I wanted to faithfully represent Southern culture. It\'s easy to make shallow work about the South. Grits kitsch- an idealized and cliched South that belongs in a Cracker Barrel. It can be difficult to capture an image of the South that feels authentic, because the South is so often parodied and mythologized. I approach the South and its culture through my family\'s deep roots in Alabama. "Newt" is a portrait of my great-grandfather, and the farmer in "Hog" is his father. They are both based on family photos I borrowed from my grandmother\'s house, which is also where I found the objects in "Relics." My motivation is split between trying to discover the beating heart of Southern culture and uncovering my family\'s history. Both lines of inquiry are ultimately about understanding my own identity.'}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/facebook.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.facebook.com/LoganTannerArt/?fref=ts')}>
                      {' LoganTannerArt'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Logan;
