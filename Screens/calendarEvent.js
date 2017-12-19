import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Linking} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';



export default class CalendarEvent extends React.Component {
render(){
  let events = this.props.data.map(function(eventsData, index){
    var months = {
      "1": "Jan",
      "2": "Feb",
      "3": "Mar",
      "4": "Apr",
      "5": "May",
      "6": "Jun",
      "7": "Jul",
      "8": "Aug",
      "9": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec",
    }
    var category = {
      "1": "ARTS",
      "2": "MUSIC",
      "3": "COMMUNITY",
    }
    return (
      <View style={Cstyles.postContainerEvent} key={index}>
        <TouchableOpacity onPress={() => Linking.openURL(eventsData.url)}>
          <View style={Cstyles.subPostContainer}>
            <Text style={Cstyles.eventType}>
              {category[eventsData.type]}
            </Text>
            <Text style={Cstyles.postTitleEvent}>{eventsData.title}</Text>
            <Text style={Cstyles.eventDescription}>{eventsData.description}</Text>
            <View style={Cstyles.postSubEvent}>
              <Text style={Cstyles.postSubCatEvent}>{eventsData.venue}</Text>
              <Text style={Cstyles.postSubCatEvent}>{eventsData.time}</Text>
            </View>
            <View style={Cstyles.postSubEvent}>
              <Text style={Cstyles.postSubCatEventAddress}>{eventsData.address}</Text>
              <Text style={Cstyles.postSubCatEvent}>{eventsData.admission}</Text>
              <Text style={Cstyles.postSubCatEventDate}>{months[eventsData.month] + " " + eventsData.day}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  });
  return (
      <View style={Cstyles.calendarPage}>
        {events}
      </View>
    );
  }
}

module.exports = CalendarEvent;
