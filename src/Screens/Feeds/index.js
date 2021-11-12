
import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import VideoPlayer from 'react-native-video-player';
import Styles from './styles';
import { s } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { getDatafromStorage } from '../../Redux/Actions/mainActions'
import moment from 'moment';

//assets 
const add = require('../../Assets/addition.png')
const share = require('../../Assets/share.png')

//constaints 
const emptyScreen = "No Post is added yet."

// MAin Feeds fucntion component
const Feeds = (props) => {
  const navigation = useNavigation();

  // Feeds Array with sort function getting from redux props
  const feedsData = useSelector((state) => state.data.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  }));
  
  const dispatch = useDispatch();

  // Fetch data from local storage
  const getData = async () => {
    const feedList = await AsyncStorage.getItem('FEEDS')
    dispatch(getDatafromStorage(JSON.parse(feedList)));
  }

  //hooks methods
  useEffect(() => {
    getData();
  }, []);


  const onShare = async (item) => {
    try {
      const result = await Share.share({
        url: item.media,
        title: item.title,
        message: item.descriptions
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  // render itms for feeds 
  const renderFeeds = ({ item, index }) => {
    return (
      <View style={Styles.itemContainer}>
        {item.mediaType == 'photo' ?
          <Image
            style={Styles.mediaView}
            source={{ uri: item.media }}
          />
          :
          <VideoPlayer
            video={{ uri: item.media }}
            videoWidth={1400}
            videoHeight={800}
            thumbnail={{ uri: item.media }}
            muted={true}
            disableFullscreen={true}
          />
        }
        <View style={Styles.contentView}>
          <View style={Styles.postDetails}>
            <View style={Styles.titleView}>
              <Text style={Styles.titleTxt}>{item.title}</Text>
            </View>

            <View style={Styles.dateView}>
              <Text style={Styles.desctxt}>{moment(item.date).format('LLL')}</Text>
            </View>
          </View>
          <View style={Styles.descView}>
            <Text numberOfLines={3} style={Styles.desctxt}>{item.descriptions}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => onShare(item)} style={Styles.shareBtn}>
          <Image source={share} style={Styles.shareIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  // main render
  return (
    <View style={Styles.conatiner}>
      <FlatList
        data={feedsData}
        renderItem={renderFeeds}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: s(100) }}
        ListEmptyComponent={<View style={Styles.emptyContainer}>
          <Text>{emptyScreen}</Text>
        </View>}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Create Feed')} style={Styles.addBtn}>
        <Image source={add} style={Styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Feeds;
