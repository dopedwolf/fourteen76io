import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class Girlpool extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/girlpoolhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Girlpool"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>Interview by Blake Ells</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Girlpool is Cleo Tucker and Harmony Tividad from Los Angeles. They began writing and playing music by themselves and added a drummer for the 2017 release Powerplant. Their sound has grown bigger since their debut, Before the World Was Big."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"They talked about that evolution, returning home and their inspiration."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What’s the Girlpool origin story?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Harmony Tividad: We were hanging out at The Smell—which is a DIY venue in L.A.—a lot and going to a lot of shows there. One day we met because we had a lot of mutual friends. We’d played in different bands and played shows together a lot; we became closer and closer and started to share songs we’d write and trade music and eventually started jamming out. And we decided to form a little project; that’s the beginnings of Girlpool."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"When was that?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"HT: Late 2012-early 2013."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What did those first jam sessions sound like? Did you begin playing covers together or did you start writing originals?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Cleo Tucker: We were experimenting with a bass guitar and guitar and vocal and seeing what we could get out of our element. That was exciting to us—seeing what we could get out of the instruments that we had. There was a lot of experimentation without a lot of instrumentation."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"When and why did you decide to add more instrumentation, like a drummer?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"CT: We liked new music and we became inspired by ideas beyond those limitations. We wanted to work with playing with other sounds. It was organic."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What brought you back to L.A. together?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"CT: We just wanted to be back home. We knew that we were gonna do a lot of touring after this record came out and we knew Los Angeles. It felt like the right time to come back and work from here."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Did you have a lot of family there?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"HT: Yeah, we have family here and we’re close to them and it was good to be back."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What inspires you?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"HT: I don’t know if there’s anything that’s not inspiring. It’s a very big world and there’s a lot happening constantly and I feel like there’s no specific source of inspiration other than the fact that we’re just alive and observing the world around us and seeing things."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Have you played the South before or will this be your first visit?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"CT: We have, yeah. It’s cool. It’s humid!"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How have you found the people here? Are they inviting? Do they fit the stereotypes?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"CT: We’ve only had pleasant experiences there."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What can we expect from a Girlpool live show?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"CT: Ecstasy. Sex, love, ecstasy."}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Girlpool;
