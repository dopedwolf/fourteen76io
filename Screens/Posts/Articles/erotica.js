import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Erotica extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <Image source={require('../../../assets/images/else/chromacovehead.jpg')} style={Cstyles.articleHeadImage}/>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Art Erotica and the Censored South"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Jonathan Patrick</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"As the arts in Birmingham grow steadily and as a centralized, DIY artists' community begins to extend upward from its roots, spaces like Chroma Cove, a new studio and venue in Forest Park, prove how essential they are to this growth. Not only is Chroma Cove legitimizing emerging local talent, but with shows such as this past Saturday's Art Erotica, the venue is looking to catch the Bible Belt up with gallery prerogatives across the country. Andrea Dillingham, one of the founders and curators of Chroma Cove, sat down to discuss censorship in art and on social media, eroticism, and southern gallery tradition."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/chromacove3.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Before we get into Art Erotica, tell us a little about Chroma Cove in general."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"What you're doing when you go to Chroma Cove is basically the same thing that everyone's doing when you go to the Firehouse or places like that, where they can go to those shows a couple times a week. You go to a show, you pay five dollars and you see live art, just as you would see live music that you can't get the same experience from on someone's Instagram or somebody's Soundcloud. I didn't see there was an outlet for that, so we wanted to put our hand in there and start making that happen and so far the shows have been well received and there's been excellent feedback, because people are wanting this. It's not a problem, finding people to show their work because there're so many talented people that want to be shown, they just don't have a space for it."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How did the idea to do this show come to mind?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Essentially, I needed a show idea for February and I thought somehow correlating it to Valentine's Day would be fun. I had also recently heard of a local venue removing an artists work the day before her show because of potentially offensive content. So, I thought, 'Hey! I'd totally show that in my gallery!' As an artist myself, I know what it's like to create work that you know will barely even get to be seen because of the guidelines of our society. Also, it is a personal concern of mine to see people still so uncomfortable with openly discussing sexual subject matter in this day and age. There are plenty of artists that have a lot to say about erotica, and I wanted to create an opportunity for those artists to have that work displayed in a safe and open-minded space."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/chromacove2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Were there lots of submissions for Art Erotica at Chroma Cove?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Yes! Instead of trying to curate [this show], I just made it open submission through the page on the event and I made it a point to use art from every single person that submitted something. For how new this venue is, I'm surprised at the amount of artists that popped out of the woodworks to submit. Many of which I had never heard of or met! Even most the patrons at the show were very friendly and excited people that I didn't recognize. There was also such a wide range of styles and content. While I did make it a point to use a piece from every artist that submitted, I couldn't use every piece I got in total. There just wasn't enough wall space!"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Amidst all the wildly polarizing moments of the new White House administration, Censorship seems to be the American people's and the media’s most recent point of contention. What place do you think shows like Art Erotica, an event sure to be censored in a public setting, have in a region as politically conservative as the South?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Firstly, I understand that the patrons attending the show already had the context of erotica in mind. It is also still a small venue that is not very publicly known, more in 'the scene' as some may say, so the audience is narrowed down to those already interested and open to the idea of erotic, offensive, or often censored art. However, the more someone is exposed to an idea or image the more comfortable they become with it. By offering people of Birmingham an experience where nudity, sexuality, and confrontational art is displayed in an environment that is both fun and comfortable, it allows them to feel more easy with ideas that are typically so taboo. Unlike the government, it lets you think 'Hey! Expressing your ideas of sexuality through art and looking at boobies and dicks in a gallery setting isn't weird, it's cool! We can all come together and appreciate these very human feelings without freaking out about it! We don't have to suppress that which we were conditioned to be ashamed of!!!'
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/chromacove1.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What is it you see at the crossroads of Art, Birmingham, and Censorship?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  I know that in Birmingham, it's almost impossible to find a venue that would show art without censorship in a gallery setting. Part of the whole point of Chroma Cove is that it's a happy medium for art shows. It's not a high end, expensive, rich demographic gallery, but it's not DIY, vendor, or someone's basement. It's fine art, hung right, in a gallery, but in an all inclusive setting, fun, welcoming for emerging artists, but it's done right. Like the name, Chroma Cove, it's a cozy, colorful art getaway. But back to the point of the show, if you're art has ever been censored before, fuck that, come show it here. For artists that are making stuff and they don't know where to go and they don't know where to go to begin to even try to show it, this is the show for that. If you've made stuff that you think would offend people, come let's offend people. A lot of it would be things that are censored on social media, because things like nipples are constantly censored on social media, and you can't show your nipple art. Like I said, one thing that bothers me are all the nipples that get censored on Facebook and Instagram.
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  Galleries often take a hefty percentage of the art hanging on their walls to pay for staff salaries, rent, etc. How does Chroma Cove finance it’s expenses and at what cost is it to the artist?
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Chroma Cove is different than a gallery in that sense, because it's not a business. It doesn't exist for profit, rather only as an outlet for emerging artists and a fun experience for their spectators. Also, keep in mind for the rest of the month besides the show day and install days, Chroma Cove is my own personal art studio. I'm a working artist trying to build a portfolio here, so that's the first reason I got the space. As for finances? There is no submission fee, sales commission, space rental, or absolutely anything for artists to pay. Our only profit comes from the $5 door admission at every monthly show. So far, the admission and bar tips pay for most, but not all, of the month's rent for the space. This doesn't include bills, install/cleaning supplies, the motif, or the alcohol I buy for the open bar a every show. I'm spending more than I will ever get back on this project, and I'm happy to do that. The purpose of the space is very important to me! I love when it's my own little art studio get-away, but I also love putting my curating/event planning skills to good use for the community! :~)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Erotica;
