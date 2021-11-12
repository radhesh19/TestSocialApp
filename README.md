# React-Native-TestSocialApp-Module
1. Feed can be created by a click on the bottom plus icon.
2. Create feed with Title, Descriptions, Photo/Video, and created date time (String).
3. Feed list should be maintained in a local database.
4. Feed sorted by time.
5. User can be able to share the event with WhatsApp/Message


**Libraries used:-  **

- "@react-native-async-storage/async-storage": "^1.15.11",
- "@react-navigation/native-stack": "^6.2.5",
- "@reduxjs/toolkit": "^1.6.2",
- "moment": "^2.29.1",
- "react": "17.0.2",
- "react-native": "0.66.3",
- "react-native-customized-image-picker": "^1.2.2",
- "react-native-image-picker": "^4.2.0",
- "react-native-safe-area-context": "^3.3.2",
- "react-native-screens": "^3.9.0",
- "react-native-size-matters": "^0.4.0",
- "react-native-vector-icons": "^9.0.0",
- "react-native-video": "^2.3.1",
- "react-native-video-player": "^0.12.0",
- "react-redux": "^7.2.6",
- "redux": "^4.1.2"


**Notes:- **

- As discussed no middleware is used,
- Data is stored on Async storage 
- Redux is used
- React Naviagtion - Stack navigator is used
- A Model is added which have 4 buttons to select media file
     - From Camera (Video/Photo)
     - From Gallery (Video/Photo)
