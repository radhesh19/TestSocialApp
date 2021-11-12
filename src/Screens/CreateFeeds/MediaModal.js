
 import React from 'react';
 import {
   Text,
    View,
    TouchableOpacity,
    Modal
 } from 'react-native';
 import Styles from './styles';
 import ImagePicker from "react-native-customized-image-picker";

const btns = [
    {title:'Take Photo'},
    {title:'Take Video'},
    {title:'Take Photo from Gallary'},
    {title:'Take Video from Gallary'},
]


const MediaModal = (props) => {
    const {visible, onClose, onSelectMedia} = props;
    const onSelectType = (index) => {
      if(index == 1){
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          onSelectMedia(image[0], "photo")
        });
      }
      else if(index == 1){
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          isVideo: true
        }).then(image => {
          onSelectMedia(image[0], "video")
        });
      }
      else if(index == 2){
        ImagePicker.openPicker({}).then(image => {
          onSelectMedia(image[0],  "photo")
        });
      }else if(index == 3){
        ImagePicker.openPicker({isVideo: true}).then(image => {
          onSelectMedia(image[0], "video")
        });
      }
     
     }


    return(
      <View style={Styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
          <View style={Styles.innerContainer}>
            <View style={Styles.btnContainer}>
                {btns.map((item, index) => ( 
                <TouchableOpacity onPress={()=>onSelectType(index)} style={Styles.ModalBtn}>
                    <Text style={Styles.btnTitle}>{item.title}</Text>
                </TouchableOpacity>))}

                <TouchableOpacity onPress={onClose} style={Styles.cancleBtn}>
                    <Text style={[Styles.btnTitle, {color:'#fff'}]}>{"Close"}</Text>
                </TouchableOpacity>
            </View>
         </View>
        </Modal>
    </View>
   )
  }

  export default MediaModal