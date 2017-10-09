import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Heirloom extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/else/eugenehead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Heirloom"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Jonathan Patrick</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Food trucks: the craze that has become a bento so overfull with ceviche-sushi fusion concepts it has started spilling onto a pallet churning out everything from bao ice cream sandwiches to gourmet grilled cheeses. While intercultural culinary savvy is an exciting and exponentially expanding prospect, it does have a knack of distracting from what lies in plain sight, particularly from certain foods that are not only closer to home, but even relatively fresh on the scene. At hardly 40 years old, my case in point, Nashville Hot Chicken. Just leave it to Birmingham first responder, chef-owner of Eugene’s Hot Chicken, Zebbie Carney, to open up the windows of his ruby truck and get you as intimately acquainted with this new American standard as he was growing up in East Nashville."}
                </Text>
              </View>
            </View>
            <Image source={require('../../../assets/images/else/zebbie.jpg')} style={Cstyles.articleHeadImagePortrait}/>
            <Text style={Cstyles.photoby}>Zebbie Carney, chef/owner of Eugene's Hot Chicken</Text>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"A bustling arts and entertainment district today, East Nashville’s transformation has been fairly recent, seeing property value increases as confoundingly high as 2 percent per month throughout the past half decade. Zebbie reminisces about a very different place, however. “It was rough…I lost people I grew up with…” Yet it’s out of adversity that strength lost elsewhere can be found in family and tightly wound community. It was in this iteration of East Nash, in fact, that Zebbie first waited in line to witness the magic at Prince’s Hot Chicken, creators of hot chicken and recipients of a James Beard Award for inventing a new “American Classic”. From then on, the dream’s roots were planted. “We always wanted to open a hot chicken spot…sell old school soda, old school chicken.” Zebbie adds that Prince’s was simply trying to run a business and feed the people, “They didn’t even know who James Beard was!”"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"In regard to family, Zebbie refers to his own as “Team No Sleep”, an astute name for the business owner and dad of a 3 year old and 3 month old. You’ll find his cousin, Charlie, prepping, battering, frying, brushing secret spices beside him. The truck’s namesake, Eugene, is Zebbie’s father (his middle name, to be exact), the first of several mentors the chef considers quintessential. “He’s a backbone…he taught me how to tie my shoes, how to drive, taught me how to pee straight.” He especially accredits his father’s emphasis on hard work and education. The imprint his father’s example and his avid lessons had are evident considering the classic dish pit to sous chef shimmy Carney performed under the tutelage of Jason Cockerel at Merchants Restaurant in Nashville, let alone the chef's two Associate’s Degrees in Business and his Bachelor’s in Business Administration."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Alas, every story has its chapters and every chapter has its close. After spending time as the Executive Chef at Ore Drink and Dine (of which Taylor Hicks was a partial owner), published recipes, and T.V. appearances, Brennan realized, as far as the vessel of haute cuisine was concerned, he was a stowaway. Seeing a sharp trend in mid/high end restaurants and bars, Jonathan paired up with the folks at Carrigan's Public House and the rest is history. Relevant, ongoing, delicious history.
                </Text>
              </View>
            </View>
            <Image source={require('../../../assets/images/else/nate.jpg')} style={Cstyles.articleHeadImageDescription}/>
            <Text style={Cstyles.photoby}>Nate and Charlie</Text>
              <View style={Cstyles.articleBody}>
                <Text style={Cstyles.articleBodyContent}>
                  Drawn from his time under Cockerel, “He taught me how to fish. Cooking always changes, you always learn something new, but you never forget the basics.” It’s in these basics that Carney’s chicken finds its edge. While Eugene’s now serves a grilled cheese and a side of seasonal heirloom tomatoes seasoned with salt, pepper, basil, and olive oil (these additions themselves being stark naked), the truck started out with a tiny few options: wings or tenders, slaw or fries. Throw whichever combination on a slice of white bread, place a couple pickle chips on top, and serve with a side of ranch. The implications here are greater than one might suspect; there aren’t many steps from batter to fryer to seasoning for this chicken, so it requires consistency in perfection. Just the right amount of flavor, just the right amount of time in the heat, just the right amount of heat. This chicken is too deep for the few steps that are involved in its preparation, a true exercise in purity, and that is precisely what makes it so impressive.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Now for those less bold, don’t fret, because you have plenty of say in your spice preference. From Southern (no heat) to Stupid Hot (they’re not fucking around when they say “Stupid”; that good burn, it will make your tongue illiterate for the next hour), they’ve got the levels and have got you covered. The heirloom tomatoes are a perfect match to cool your palate in between spicy bites, yet another practice in minimalism rooted in Southern cuisine. These toms will have you heading to your local garden shop for tomato and basil seeds in no time."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  While executive chef at J. Alexander’s, where he spent 10 years, the importance of simplicity came to Zebbie, from both an unexpected and entirely expected place. Working with Five Loaves, an outreach headed by chefs aiming to teach students in Woodlawn and Fairfield the importance of cooking versus relying on fast food and other “easy” alternatives, he started relating to the children in order to teach them. “Kids didn’t understand the food. We’re supposed to be teaching the kids. They weren’t connecting. They said, ‘We want some greens, we want some fried chicken!’” So that’s what he made. Unsurprisingly, the children became engaged, not only enjoying their lessons more, but taking more away from them, connecting with the food and connecting with the chefs. In that moment Zebbie was reminded of his love of hot chicken. He had found the platform from which he would feed the people.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Whether via family, profession, or community, mentorship is the reoccurring theme in Zebbie’s success rhetoric. It was his barber that introduced him to the widely acclaimed personal finance book “Rich Dad, Poor Dad”, and it changed the way he looked at money. Per the book’s instruction, Carney decided to invest, though differently than his peers, differently than was the status quo pressed upon him and his community. “[Back then] in East Nashville, you’ve seen pimps, you’ve seen hustlers. It was either buy a house or buy a Crown Vic on {"20s"}.” So Carney decided to buy a house in the center of East Nashville.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  “East Nashville wasn’t always so bougie. It’s a lot like North Avondale,” he says nodding toward the tracks pointedly dividing the two halves of {"41st"} St as we sip gin cocktails inside a cozy bar, “These guys, they just need mentors. That’s all they need…A generational curse can be broken.” Coming from a man whose only fortune growing up was proper guidance, a thing many take for granted and many do not have, a man who invested himself back into his community, I wholeheartedly believe those words. The parallel he draws is one that’s been sorely ignored by workers and patrons alike on the twelve-dollar- salad end of Avondale—one side being craft beer, rising property values, and heavy non-Avondalien influence, the other a Popeye’s, a car wash, and some projects, the southern-coined “across the railroad tracks” mentality stands dauntingly obvious on {"41st"} St. If the modern South that Avondale’s wealthier, non-native renovators stake heavy claim to enriching lies within gentry trends, the question does arise as to how modern the mindset actually is. And while infrastructure and icons like the beloved pachyderm are pieces of a fragmented memory trying to be reclaimed, there are people who those memories belong to, and it’s those people who give the life of those memories breath. All that remains is to wait and see whether or not Avondale and similar neighborhoods will rise as Promethean men hewn from appropriated gimmicks or as resurrections of a spirit wholly remembered. Let’s hope that the difference lies in the hands of the likes of people such as Zebbie Carney.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Now check out these hot chicken angles.
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/chicken1.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Image source={require('../../../assets/images/else/chicken2.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <View style={Cstyles.articleBody}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"**Zebbie believes that Nashville Hot Chicken will not only sweep the nation, but will become a medium as deeply modified as that of barbecue, developing regional distinctions as the style ages.**"}
                </Text>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Heirloom;
