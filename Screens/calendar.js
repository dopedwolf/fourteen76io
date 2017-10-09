import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';


class Calendar extends React.Component {
    state = {
      loading: true,
      error: false,
      events: [],
      filter: []
    }
    componentWillMount = async () => {
      try {
        const response = await fetch('https://api.myjson.com/bins/7cwxh')
        const events = await response.json()

        this.setState({loading: false, events})
      } catch(e) {
        this.setState({loading: false, error: true})
      }
    }
    renderEvent = ({event}, i) => {
      return (
          <View style={Cstyles.postContainerEvent} key={i}>
            <View style={Cstyles.subPostContainer}>
              <Text style={Cstyles.postTitleEvent}>{event.title}</Text>
              <Text style={Cstyles.eventDescription}>{event.description}</Text>
              <View style={Cstyles.postSubEvent}>
                <Text style={Cstyles.postSubCatEvent}>{event.location}</Text>
                <Text style={Cstyles.postSubCatEvent}>{event.dateTime.time}</Text>
              </View>
              <View style={Cstyles.postSubEvent}>
                <Text style={Cstyles.postSubCatEventAddress}>{event.address}</Text>
                  <Text style={Cstyles.postSubCatEvent}>{event.price}</Text>
                  <Text style={Cstyles.postSubCatEventDate}>{event.dateTime.month + " " + event.dateTime.day}</Text>
              </View>
            </View>
          </View>
      )
    }
    render () {
      const{events, loading, error} = this.state
      if(loading) {
        return (
          <View style={Cstyles.container}>
            <ActivityIndicator animating={true} color={'#f2b1bd'}/>
          </View>
        )
      }
      if(error){
        return(
          <View style={Cstyles.container}>
            <Text>Error loading Events!</Text>
          </View>
        )
      }
      return (
        <View style={Cstyles.container}>
          <ScrollView>
            <View style={Cstyles.pageContainer}>
              {events.map(this.renderEvent)}
            </View>
          </ScrollView>
        </View>
      )
    }
  }


module.exports = Calendar;
