import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';

class TimePretend extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Time to Pretend"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>David Macias Navarro</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/timepretend/one.jpg"),
                require("../../../assets/images/photography/timepretend/two.jpg"),
                require("../../../assets/images/photography/timepretend/three.jpg"),
                require("../../../assets/images/photography/timepretend/four.jpg"),
                require("../../../assets/images/photography/timepretend/five.jpg"),
                require("../../../assets/images/photography/timepretend/six.jpg"),
                require("../../../assets/images/photography/timepretend/seven.jpg"),
                require("../../../assets/images/photography/timepretend/eight.jpg"),
                require("../../../assets/images/photography/timepretend/nine.jpg"),
                require("../../../assets/images/photography/timepretend/ten.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"\"It is difficult to conceive a culture indifference to eternity, which rejects durability. It is equally difficult to conceive a moral indifference to the consequences of human actions, which rejects responsibility for the effects that these actions may have on others. The advent of instantaneity leads human culture and ethics into to an uncharted territory, where the most of the learned habits to face life have lost all usefulness and sense\" (Zygmunt Bauman)"}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Following the concern that class division of society has generated on me, how it has evolved to date and how the events of the financial crisis of 2008 seem to have accelerated the transformation and restructuring of the model to which we were accustomed in the Western world, I intuit certain tendency to dilution of classes and the emptying of sense anterior of this process. Therefore, I try to deepen in the concept of instability which we live, where everything becomes confused and uncertain, where the modern dream fades, perhaps giving, as a society, what could have been a fruitful modernity."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"There have been a conjunction of series of conditions and strategies carried out following the financial crisis of 2008, which claimed, again, from financial powers, a devaluation of the rights acquired by workers throughout History appreciate the emergence of a new social mass proletarianised; in which the middle classes have been diluted with a purchasing power that hardly surpass obtaining basic necessities, becoming the world's largest market in number of consumers. A mass that could hardly consume, being able to allow punctually expenses or perhaps cheap products, but not a massive and higher quality goods consumption; in this context, it is where we find the triumph of the low cost products."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"The market is adapted to generate mass consumer products and scope of such consumers, ranging from the textile industry, furniture, food, cars, etc ... that have to be cheap (the products) and manufactured in working and legal conditions to continue generating profits, so it no longer seeks only decentralization of enterprises, but also a reconciliation of laws by lobbying pressure by big capital, which favor continued business in countries where, if not by this adaptation, would not be profitable."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"This model of society to which we turn, is the product of their impoverishment, a wealth monopolized by international capital and a casualization of labor, which is fed back as follows: continuous decreases in the price of products, consistent with the power consumer spending, affecting in turn the perception of wages."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Not so much the question of the material impoverishment, but the situation of subjection to being taken by the individual, which determines the focus of this work. The disappearance of the middle class, with inadequate social protection mechanisms, leads to an unaffordable economic dependency, due to the type of work that offers international capital and investment. That is to say, this new social class, consisting on the mass, but couldn't access to consume goods, depending on a job that will not provide or necessary stability (continuity in time) or conditions (time, conciliation family life, leisure time, internal promotion in the post etc.) to enjoy a dignified life. However, the general perception, today, is that the social majority still anchored to the old concept of belonging to the middle class, while it ignores the source that generates uncertainty and contingency that affects their daily lives, barely know the face of their rulers."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Therefore, are individuals sentenced to one of two destinations in the dystopia of liquid modernity enunciated by Bauman: be assimilated by the system, assuming the previously developed, trying to forget their troubles to simply survive, or be marginalized and placed in otherness without vital solution."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>
              {"For this photographic essay, I make an approach from a documentary prism, the lifestyle of the consumer society, the difficulties involved in not having an income level that allows you to have a comfortable life and how it is reflected in the type of products they consume."}
            </Text>
            <View style={Cstyles.shareSocial}>
              <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
              <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://cargocollective.com/davidmacias/')}>
                {' David Macias'}
              </Text>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = TimePretend;
