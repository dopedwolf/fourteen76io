import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class CindyWilson extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/cindywilsonhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Cindy Wilson"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>Interview by Blake Ells</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {`Cindy and her brother Ricky Wilson were among the founding members of Athens, Georgia’s B-52s. The band is currently celebrating its 40 th anniversary, and simultaneously, Cindy is celebrating the release of her first solo record, Change. It’s a dance record that she always wanted to do, and as her legendary band wraps touring, she’s finally found the time to live out that dream with the help of Kill Rock Stars.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`She splits her time now between Athens and Atlanta. On her way to Birmingham, she talked about the legacy of the B-52s and how her first solo record was realized.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How long has the solo record been in the works?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`A friend of mine—Ryan Monahan—who I’ve known for eight or nine years—is a friend of the family and we’ve been doing music locally outside of the B-52s for a few years now. I had some time off with the band, so we went into Suny Lyons’s studio to see if we could work together, [see] how it would sound. It was really successful; we liked working together. It became really apparent that Suny would be great in the band, too, so he’s a full-fledged member and partner in the whole thing. It’s really exciting how it all came together.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`We started planning a sound—what we wanted to go for and that took a while. They brought in a lot of music to do—and we used musicians from around Athens, some really top drawer people. It was amazing, the talent in Athens. It’s been fun to watch the songs and the sound build; it’s been like school for me sitting back and taking it all in. It’s very different from when the B-52s first started. I’m taking it all in.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Do you enjoy building something back up from scratch? Is it fun being in a van again?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It absolutely is! With the B-52s, we mostly fly. We normally do clusters of dates, and we’ll fly. We work all year long. With this solo project, everyone has to plan around their jobs—we’re still at that stage. We rent a van and we pile ourselves in and go for it."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Will you include B-52s material in these solo shows or is it all original solo material?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It’s original solo stuff. It’s kind of a show on its own. It all makes sense; it all flows, like it’s a musical. And it never really stops. It’s really interesting and very different from the B-52s. We’ve gotten a lot of great feedback; people really like the show."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Where did you draw inspiration for what you wanted the solo stuff to sound like from?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It all came from Suny and Ryan and myself. I was listening to a lot of Tame Impala; I was loving electronic and psychedelic. I loved the harmonies and the melodies that he was doing. I liked that tranquil, trippy vibe. And I love the idea of one song flowing into another on the album. That’s what we went for. It’s very different from what I usually do with the B-52s. It’s a different thing. I’m loving it."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"When this band began, it was sort of a microphone for the Southern LGBTQ community. Were you comfortable with that role and how has it evolved for you over the last 40 years?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`We’ve always supported the gay community, and during the AIDS crisis, we tried to get out and do as many interviews as we could and talk about it when people were being very quiet about it. They were confused; they didn’t know what was going on. After Ricky passed—and he passed early in the epidemic—my head was swirling. Everyone in the band was confused and dazed…as everybody else probably was. We were losing family and friends—other friends—and it was a really scary time. But we did get to talk about it, and I think that was good.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Cyndi Lauper organized a tour of different artists in support of gay marriage several years ago, and we were part of that. We’ve tried our best to be supportive of causes; like PETA. Our songs aren’t hit-you-over-the-head political songs, but we try our best to talk about these things in interviews.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`Were you aware of how large your role was? That was a time when people weren’t saying those types of things in the South in 1977 or even 1987.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Yeah, I mean we didn’t call it “gay” then. It was “alternative;” alternative music. It became clear in the ‘80s that everyone needed to come out of the closet—and that’s not to say that anyone in the band was in the closet, but it was a time for us to talk about what was going on—the dangers in the gay community. Everywhere, actually, but it was affecting the gay community particularly.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`Have we made positive progress?`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Yes. This generation has a whole new bunch of concerns. Obviously, there’s still a lot to talk about and figure out.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`What is your relationship like now with the Athens community? Not only the scene that you were a part of with R.E.M. and Pylon and Love Tractor; but the younger bands that are playing now?`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`We left really early after we got our record contract with Warner Brothers and Island and moved up to Mahopac, New York in the ‘70s. So we weren’t really a part of that community.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`But Fred [Schneider, vocalist] helped Pylon get signed and going. He was instrumental in that.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`It’s great to see them touring again.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Yes! Vanessa [Briscoe-Hay] is so amazing. She’s better than ever. We’re really happy to see that. We left early, but we were happy to see it all develop to where it became such a music mecca; and it still is a very creative place. There’s lots of good musicians and artists there. I don’t go out as much as I should, but I do from time to time to check out some bands. Whenever I get some time, I try to, and it’s amazing.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`You mentioned Tame Impala. What other new music are you into these days?`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`I like Temples. Usually, I’ll just put it on alternative radio and let it go. I like fresh sounds. I like the blues. I like samba music. Bossanova. I like a little bit of everything.`}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {`How weird is that for you? Putting it on an “alternative” station knowing that you kind of helped create the genre?`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`It’s kind of cool! Yeah! Music has always been influenced by previous artists and it keeps echoing down through the generations. It’s really cool. I’m really proud that we got to be a part of that and influence younger bands`}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = CindyWilson;
