import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Carrigans extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/else/carriganshead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"A Street Soul, Fine and Fried"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Jonathan Patrick</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photos by Mateo Montoya and Jonathan Patrick</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Jonathan Brennan can be a tough dude to track down. If he's not firing, slicing, smoking, sauteing, or braising, you might find him at the Haints' shop turning a wrench. Or you might not. That's because these two pseudo stationary moments are about as still as this guy gets, being known to skid from Birmingham to Long Beach, from Milwaukee to Colorado, on cross country rides in search of sights to behold and Ma and Pa spots worth adding to his bestiary. He and the caravan are, in his own words, 'broke ass foodies, more or less.'"}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/carrigans1.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  With his mother's side of the tree being firmly rooted in Southern tradition and his father hailing from New England, Brennan was bred into what may arguably be the two most essential, ubiquitous, and regionally bickered about s-words of food: soul and sea. Whether the all-too-talked-about (but never over-hyped, because even after eating a godless number, I can to this day revisit an <Text style={Cstyles.articleBodyItilized}>elote</Text> sans <Text style={Cstyles.articleBodyItilized}>elote</Text>  with minimal guilt) all beef, buttermilk battered, <Text style={Cstyles.articleBodyItilized}>guajillo</Text>  graced street corn dog or a humble lobster roll (for those unfamiliar, this is a New England specialty, showcasing butter smothered lump lobster meat), bold flavors are to be found in Brennan's history, on his mind, and in his kitchen.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"By interest or by fate, Brennan found himself at George Reis\' 26, and subsequently"} <Text style={Cstyles.articleBodyItilized}>Ocean</Text>{", where he spent 3 years earning his stripes in the realm of fine dining. This is where his very apparent understanding of presentation, aromatics, and technique were established, or in his summary, 'getting as much flavor out of each ingredient.' When asked what, aside from the rudiments, stuck from his experience in finer foods: 'Having respect for food and wanting it to be a great creation after putting your work into it.'"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Alas, every story has its chapters and every chapter has its close. After spending time as the Executive Chef at Ore Drink and Dine (of which Taylor Hicks was a partial owner), published recipes, and T.V. appearances, Brennan realized, as far as the vessel of haute cuisine was concerned, he was a stowaway. Seeing a sharp trend in mid/high end restaurants and bars, Jonathan paired up with the folks at Carrigan's Public House and the rest is history. Relevant, ongoing, delicious history.
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"He wanted to cook something \"...immediately relatable. You don't want your customer to turn and say, 'What the hell is that? And it costs $20??'\" Think"} <Text style={Cstyles.articleBodyItilized}>Street Sharks</Text>{" meets Anthony Bourdain with a grandé mustache. On motorcycles. Such a T.V. dream was soon realized. It is here at Carrigan's that Jonathan has made, this time without the help of Taylor Hicks and a PR agent, a promising reputation for himself and his street-sea-soul fusion."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"What sets Carrigan's cuisine apart from anything else around is its surprisingly affordable price range paired with Jonathan's attention to detail and his respect for each ingredient's expression in a dish. Simpler, more street or 'home', ingredients are founded in exemplary oxtail and pork cheek stocks, smoked, braised with herbs and spices. And, as un-soul, as un-biker stache as it may seem, the Vegetarian, the Vegan, do not abandon hope, ye who enter here. Brennan's palate for the sea snips a special flower from Poseidon's garden, substituting Nori seaweed in the Caesar dressing where anchovies would typically find a place. The falafel sandwich is a true marriage of the South and the Mediterranean, and if tzatziki's not an option, for those more deeply conscious of the treatment of our fellow animals, the boys in the back'll gladly substitute an avocado."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/carrigans2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Now, I could go on about street food, soul food, sea food, etc, for longer than anyone here would be in to, so we'll leave you guys with some pictures instead. Whatever you call him, Jonathan, Brennan, Stache, J-Body, go see the damn man at Carrigan's Public House."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Get Fed."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/carrigans3.png')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Kung Fu Wings <Text style={Cstyles.articleBodyItilized}>sweet and spicy chili sauce, crushed peanuts, ginger lime cream</Text></Text>
              <Image source={require('../../../assets/images/else/carrigans5.png')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Street Style Corn Dog <Text style={Cstyles.articleBodyItilized}>cornmeal/buttermilk battered all beef frank on a bed of hand cut, twice fried potatoes topped with sriracha ranch, guajillo pepper ketchup, cotija and cilantro</Text></Text>
              <Image source={require('../../../assets/images/else/carrigans4.png')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Dalai Lamba Melt <Text style={Cstyles.articleBodyItilized}>house ground curried lamb, gouda, tempura red onion, feta pesto, roasted garlic aioli</Text></Text>
              <Image source={require('../../../assets/images/else/carrigans6.png')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Pork Cheek Sliders <Text style={Cstyles.articleBodyItilized}>slow braised pork cheek, apple-cabbage slaw, jalapeno, roasted garlic aioli</Text></Text>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Carrigans;
