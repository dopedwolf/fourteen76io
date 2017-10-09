import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class Balloons extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/deadballoonshead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Review of Dead Balloons"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Eugene Yess</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Honest, non-ironic rock n'roll is scant these days. Understandably, in the past, tongue-in-cheek, cleverly quick to quip lyricists have stood out above other grains by going against them. There is a point in every day, however, when all the sunflowers see the sun and they face the same direction, trying to soak up the most light like all the rest around them. And however many have tried, let’s be real, not every lyricists is a natural Stephen Malkmus or Fiona Apple. So when the flood of angst-ful assholes becomes emboldened by the stand apart, clever few among them, the lyrical atmosphere tied to snark-rock starts feeling overly pushy and loses its initial shimmer. The Dead Balloons’ self-titled first full length avoids the allure of cool, producing a true-to-self, however scattered, rock n’roll effort."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/deadballoons2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"If you’re unfamiliar with the group, let’s start with the basics. These dudes have a tight rhythm section. Tracks like the opener “Stand Up” and “Another Reaction” lilt in and out of gentle summer grooves that fit as comfortable as a lazy day spent porching. Tight to loose guitar riffing teeters on the edge of the indiscernible at times, but is held together by metronomic drumming. However held down the rhythm section is throughout the album, the group performs best with tight-knit overdriven jams. The band’s extended jams sometimes begin to meander a little indulgently, however, and I find myself asking, to where?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The record definitely isn’t hurting for lack of ideas. At a healthy 15-track mark, the contrary seems to be the case. With accompaniment and overdubbing the sound is full and the band is sure of what they’re up to, though overdubbing is sometimes sporadic, leaving space to be filled in the midst of overactive rhythmic chugs that seem to be compensating. Tracks like “Nothing At All” and surf jam “Esmeralda” are begging to be fleshed out with more thought and instrumentation."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Sore thumbs like “Bobby Sikes” seem a little forced into the puzzle. It doesn’t sound necessarily unlike the Dead Balloons, but rather time-warped forward or backward in time, finding itself on the wrong release. An identity crisis exists."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Siefert’s vocals are most convicted in “Let’s Go To Charlie’s House.” The drums break away from gentle swing and for the first time during the album, I’m convinced. Tremolo tones quiver for a moment as if asking a question immediately answered by cocksure, warm-toned riffing, and smart ass swing rhythm swaggers toward the end of the song. Something cohesive clicks here and, “Esmeralda” aside, the crisis is resolved through the rest of the album. “St. Peter’s House” stands out as the most naturally full and composed track on the release. A warm mix of folk and worldly sounds reminiscent of Brother, Sister era mewithouyou and the more straightforward moments of Yellow House’s aesthetic."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/deadballoons1.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"If the Dead Balloons could take only one thing from this release, it’s that they stand apart from most acts’ early releases in that they end stronger than they began. If this album started with “Stand Up” and skipped wandering fluff lying in between “34” and “Let’s Go To Charlie’s House,” I’d be happy. To emphasize, an identity crisis exists here, but in their moments of lucidity the Dead Balloons have got a little breath of life lifting within them. I’m not the only one interested in seeing how high it might take them."}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://store.steppepper.com/album/dead-balloons-2')}>
                    {' Listen to Dead Balloons'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Balloons;
