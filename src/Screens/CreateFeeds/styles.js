import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

const Styles = StyleSheet.create({
    conatiner:{
        flex:1,
        padding: 10,
    },
    cardView:{
        backgroundColor:'#EDE9E8',
        width:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:5,
        overflow:"hidden",
        padding: 10
    },
    input:{
        height: 50,
        width:'100%',
        fontSize: s(18),
        paddingHorizontal: 10,
        borderWidth:0.5,
        borderColor:'#D3D3D3',
        marginVertical: 5,
        backgroundColor:'#fff'
    },
    descinput:{
        minHeight: 80,
        maxHeight: 150,
        width:'100%',
        fontSize: s(18),
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth:0.5,
        borderColor:'#D3D3D3',
        backgroundColor:'#fff'
    },
    image:{
        height: s(150),
        width:'100%',
        backgroundColor:'#848a97',
        marginBottom: 10
    },
    centeredView: {
        flex:1,
      },
      innerContainer:{
          flex:1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:'#EDE9E8',
          backgroundColor:'rgba(0,0,0,0.7)',
          paddingHorizontal: 20
      },
      btnContainer: {
          padding: 10,
          width:'100%',
          borderRadius:10,
          backgroundColor:'#EDE9E8',
      },
      ModalBtn:{
          height: 50,
          width:'100%',
          borderBottomWidth: 1,
          borderColor:'#D3D3D3',
          justifyContent:"center",
          alignItems:'center'
      },
      btnTitle:{
          fontSize:s(18),
          fontWeight:'600'
      },
      cancleBtn:{
          width:'50%',
          height: 50,
          backgroundColor:'red',
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10, 
          alignSelf:"center",
          borderRadius: 50
      }

})

export default Styles;