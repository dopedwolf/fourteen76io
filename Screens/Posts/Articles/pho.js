import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Pho extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/else/phohead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Pho Que Huong"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Jonathan Patrick</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Phở (Fuh) is a rare moment in the humble, though essential, realm of broths, in which equal parts century long tradition, garnish, and finely tuned taste, require acrobatic balance. Phở thus transcends its humble origins and finds its place among the most intricate, most subtle dishes."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Vietnamese cuisine's recent surge in popularity is thrilling for old fans and newer disciples alike, though fresh enough on the scene to retain a certain mystery. A confounding mystery that will have you grinding teeth after the broth you spent six hours reducing was too heavy on the anise, and, at the bleak end of these efforts, you find yourself eating noodles in what tastes like Maruchan chicken powder and black licorice soup...sadly, I would have been better off with some basil, a bouillon cube, and a little caramelized fresh fennel."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"No one is making this mystery more unbearable than Phó Quở; Húởng (literally 'hometown' in Vietnamese). A puzzling find, as it is tucked away in an unassuming strip mall across from the Publix grocer on Greensprings Highway in Homewood, AL. The phở here is astounding. And please, leave your puns at the door; Phởnomenal! what phóquởhúởng delicious noodles! friend or phở? ad infinitum. The breadth and depth of its flavors are like no phở I've had be-phở (so shoot me), particularly considering the limited competition in the Greater Birmingham area. The local champs' repertoire doesn't end with noodles, either. Their kitchen assembles one of the prettiest, most texturally interesting, spring rolls in town and will make you one hell of a bánh mìat one hell of a price."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Take it from me, go with a friend, split a bowl of phở and a bánh mì, don't ignore the sambal chili-garlic paste, give the basil, the lime, the jalapeño, the mung bean sprouts a second to blossom in the broth, dip your bánh mì in that broth, and hang tight to your taste buds. Finish with a traditional chicory coffee with condensed milk, iced, and embrace new found daydreams of jungle sabbaticals."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/pho3.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Goi Cuon <Text style={Cstyles.articleBodyItilized}>Rice paper summer roll stuffed with pork, shrimp, lettuce and thin rice noodles. Lettuce and a sweet, crunchy peanut sauce provide excellent counterpoint for textures typically uncommon in Western cuisine. Our favorite starter for the upcoming spring, light and cool.</Text></Text>
              <Image source={require('../../../assets/images/else/pho4.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Bahn Mi Thap Cam <Text style={Cstyles.articleBodyItilized}>Cha Lua (Vietnamese ham) and Char Xiu (Cantonese style of pork barbecue) in a baguette with a full spread of vegetables: cucumber, shredded carrots, jalapenos, and white radishes. The Char Xiu covers many tasty bases with honey, and five spice at the forefront. Contrary to tradition, none of the vegetables are pickled, however, leaving me pining for something more, the tang of the Char Xiu not being quite enough. Sambal is a great addition, though beware of thickly sliced jalapenos.</Text></Text>
              <Image source={require('../../../assets/images/else/pho1.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Pho Tai Nam <Text style={Cstyles.articleBodyItilized}>Rice noodles, thinly sliced round steak, and well done beef brisket in a broth unparalleled in this region. Basil, lime, jalapeno and mung bean sprout garnishes are essential additions as the flavor will continue to blossom even as you eat. Sambal is an addition I enjoy, though in delicate balance with the jalapenos; it lends not only heat, but great flavor. If feeling a little adventurous, and for more flavor, try the Pho Dac Biet, which includes beef tendons and tripe.</Text></Text>
              <Image source={require('../../../assets/images/else/pho2.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.articleBodyItilizedBold}>Cafe Sua Da <Text style={Cstyles.articleBodyItilized}>Dark chicory coffee balanced by sweetened condensed milk. Incredibly dense, practically a liquid desert. Delicious hot or iced.</Text></Text>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Pho;
