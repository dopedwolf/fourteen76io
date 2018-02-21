import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class Lewis extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/else/lewis1.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Lewis and Quasar"}</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyItilized}>
                  {"The following are questions and answers transcribed from our interview with Lewis Lunbeck, a man of the road."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How long have you been on the road?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Getting close to four years now."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Where is home?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I started out from Omaha, Nebraska."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/lewis4.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What inspired you to go on the road?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Before I went on the road I was a year unemployed, living at my mom’s house, and I didn’t want to get a job. I didn’t want to compete with society’s means. It was kind of hard to make money and I didn’t really care much for it. I was in a depressed state. Didn’t know where life was going so I just hit the road. I didn’t know about the traveler’s life, had no idea what I was doing, or where I was going. The second day I run into these freight hoppers, and that’s where my journey began. They showed me the ropes and taught me how to survive on the road."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How old are you?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"23"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"How about you guys, how old are you?"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"We are both 19"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Damn, I thought you guys were older than me. When I was 19 I was going to college and doing a bunch of bad drugs. I went to a community college (Metropolitan Community College) in Omaha. I dropped out because I was just then figuring out how society was, getting into conspiracy theories and all that. I was also on Robitussin and pills at the time, so it was really fucking with my mind. I don’t really regret anything, although I am not so proud of the drugs."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Do you still do drugs?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I do psychedelics and weed, that’s it. I don’t touch anything artificial anymore."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Do you see yourself having an ending to your journey?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Yeah, at some point, I’m just going with it for now."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/lewis3.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What is the longest you have stayed at one place?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Six months. It was in Williams, Oregon. I was trimming on a pot farm."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Did they pay you?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"$200 a pound."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How far up north have you gone?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Washington"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What do you do for fun in these cities?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Well, hanging out in the popular spots and just running into people man, have good conversations and even hang; busking is easier in these spots too. I like to talk to people, get to know them, find out who they are and where they come from."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How do you usually travel?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Hitching, it’s how I get around most places. I used to hop freight trains. I also do a lot of walking."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What’s the most you’ve had to walk?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"42 miles, eventually someone picked me up; it usually doesn’t take long before someone does."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/lewis2.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How did you meet Quasar?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I found him on the road two years ago. He is from Austin, Texas. This girl picked him off Craiglist, but she wasn’t able to take care of him. We’ve been together for two years now. He was kind of confused on who was his owner at first, because there used to be large group of kids around him all the time."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"He [Quasar] knows when people are tripping. He comes up and tries to lick the sweat, trying to get high. One time I was tripping in Austin, it was a hot night and I was cuddling him and sweating all over him, he started tripping and twitching. We both went into a dream like state. It felt like we were dreaming together, it was weird man. I saw forest spirits, I thought I was getting abducted by aliens, and at one point I felt like I was in a comma. Research chemicals are intense."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What breed is Quasar?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Blue heeler German Shepherd, he is two and half years old."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Do you usually travel by yourself or in groups?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I just started traveling by myself—about three months ago. It’s different; people seem a little more scared of me. Before no one ever asked me when they stopped to give me a ride if I was going to hurt them, now they do."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Is it hard to find a place to sleep?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Not so much. I wake up pretty early, before businesses open, so sometimes I just sleep behind stores or in parking decks."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Aside from life on the road, what are your other passions?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Music and art. Those are part of my main passions. Anyone can benefit from them, they just gives off a special feeling, and they heal. I also love to get my hands dirty and give back to the earth."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Do you keep up with your family?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I call my mom every now and then. I also visit her when I go through Nebraska"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How does she feel about your lifestyle?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Emotionally, she is alright now. She used to be real bad about it, you know, angry. She doesn’t get why I’m doing this, and that’s alright, we all have our own perspectives."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What’s your dream?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I want to learn to sail, get a boat, and just travel the world."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Are you glad about choosing this life?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Yeah, I love the road; it has its ups and downs. In my experience there are more ups than downs. You have to stay positive about things, more so when they are shitty. That goes for everything, not just life on the road, but life itself. Always look on the positive side. Darkness can be good too; it’s a great teacher."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Where are you going next?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I don’t know. I might head north. I have a friend in Maryland that I want to visit."}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Lewis;
