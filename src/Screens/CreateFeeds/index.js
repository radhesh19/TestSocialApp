
 import React, { useState } from 'react';
 import {
   TextInput,
   Image,
   View,
   Text,
   TouchableOpacity,
 } from 'react-native';

 import Styles from './styles';
 import MediaModal from './MediaModal'
 import moment  from 'moment';
 import {setDataToStorage} from '../../Redux/Actions/mainActions'
 import VideoPlayer from 'react-native-video-player';
 import {useDispatch} from 'react-redux';
 //Assets
 const addmedia = require('../../Assets/photocamera.png')
//Main Function
 const CreateFeeds = (props) => {
   const dispatch = useDispatch();

   const [visible, setVisible] = useState(false);
   const [title, setTitle] = useState('');
   const [media, setMedia] = useState(null);
   const [desc, setDesc] = useState('');
   const [mediaType, setType] = useState('')

   //When use select the media
   const _onSelectMedia = (image, type) => {
    setMedia(image.path)
    setType(type)
    setVisible(false)
   }

   const onSubmit = () => {

    if(!media){
      alert('Please select Image/Video.')
      return
    }
    
    if(!title){
      alert('Please enter Title.')
      return
    }

    if(!desc){
      alert('Please enter Description.')
      return
    }

    let object = {
      title:title,
      descriptions:desc,
      date: moment(),
      mediaType:mediaType,
      media:media,
    }
    dispatch(setDataToStorage(object));
    props.navigation.goBack();
   }


   return (
       <View style={Styles.conatiner}>    
          <View style={Styles.cardView}>
            <TouchableOpacity style={{marginVertical: 5}} onPress={()=> setVisible(true)}>
              {mediaType == 'photo' ? 
                <Image 
                  style={Styles.image}
                  source={{uri: media}}
                />
                :
                mediaType == 'video'?
                  <VideoPlayer
                  video={{uri: media}}
                  videoWidth={1400}
                  videoHeight={800}
                  muted={true}
                  disableFullscreen={true}
                />
                :
                <Image 
                  resizeMode="contain"
                  style={[Styles.image, {tintColor:'#fff'}]}
                  source={addmedia}
              />

              }
          </TouchableOpacity>

            <TextInput 
              placeholder= "Enter Title..."
              style={Styles.input}
              onChangeText={(txt)=>setTitle(txt)}
            />

          <TextInput 
              placeholder= "Enter Desc..."
              style={Styles.input}
              value={moment().format('LLL')}
              editable={false}
            />

          <TextInput 
              placeholder= "Enter Description..."
              style={Styles.descinput}
              multiline={true}
              onChangeText={(txt)=>setDesc(txt)}
            />

            <TouchableOpacity onPress={onSubmit} style={Styles.cancleBtn}>
                    <Text style={[Styles.btnTitle, {color:'#fff'}]}>{"Submit"}</Text>
             </TouchableOpacity>
          </View>
          <MediaModal {...props } 
            visible={visible} 
            onClose = {()=>setVisible(false)} 
            onSelectMedia={(image, type)=>_onSelectMedia(image, type)}
            />
       </View>
   );
 };
 
 export default CreateFeeds;
 