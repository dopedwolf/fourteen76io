import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class UpperRoom extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/photography/upperRoom/head.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"In The Upper Room"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Nicola Walls</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Melissa Dooley</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyItilized}>
                  {"In the Upper Room, 1986, Twyla Tharp. Composition by Philip Glass. Staged by Richard Colton and performed by the Alabama Ballet, Spring 2017."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"“In the Upper Room” is a piece that shows a ballet company’s chops, so to say. To perform the piece requires a company of dancers who fully understand the intricacies of modern dance, who can accomplish small ticks and jerks while maintaining the austere ease of ballet dancers. A proper production requires direction capable of expressing minute movement amidst a sea of motion. Such direction was evident in Alabama Ballet’s performance and certainly aided by the oversight of Richard Colton."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"A member of the original cast of “In the Upper Room” and choreographer with many marks to his own name, Colton performed with Twyla Tharp from 1977 through 1988. He has staged her work for the Paris Opera Ballet, American Ballet Theatre, and Twyla Tharp Dance."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/photography/upperRoom/mid1.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"The score, written for Twyla Tharp by Philip Glass, is a mountain of sound. It is easy to be swept, heart first, into the racing and spinning of the score which meanders between treacherous horns and playful strings. The choreography derives more than rhythm from its music: it is endowed with an emotional plot."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The cast is split in two. Half of the cast, performing choreography most easily categorized as modern, is referred to by the company as “stompers”. The other half of the cast dances a more classic piece of ballet. Incessant lifts and coupled leaps negate with ease and elegance the militaristic movements of the stompers."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Much of the spectacle of “In the Upper Room” is accomplished through its aesthetics. The small twists and turns in costume design move the piece through an emotional revolution and into a sort of catharsis. Stompers, in oversized striped jumpsuits and white athletic shoes, strip down layers of clothing to reveal red leotards for women and parachute pants for men. Ballerinas start their performance in billowing, collared frocks, and end in the same Pentecostal red as their counterparts. The theatre is filled with fog for two minutes before each performance. Dancers emerge through a black curtain, superficially obscured. The sense that all of the dancers are constantly present, that the performance never begins, only waits patiently for an audience, lingers like the smog."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/photography/upperRoom/mid2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"“Leaves of Grass,” Richard Colton whispers during dress rehearsal’s final movement, as the cast appears in its entirety on stage, the stompers and ballerinas moving in and out of the haze, an organized cacophony of motion. There could not be a more apt utterance to capture the frolic and frenzy of “In the Upper Room,” with its pure reach and solid appeal to its spirit’s concern for its own form. Alabama Ballet’s production of “In the Upper Room” leaves the spectator exhausted, legs pumping lactic acid; you will have sworn your spirit left your seat, and frolicked for its own on stage."}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = UpperRoom;
