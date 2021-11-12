import { StyleSheet } from "react-native";
import {s} from 'react-native-size-matters'

const Styles = StyleSheet.create({
    conatiner: {
        flex:1,
        padding: s(10)
    },
    itemContainer: {
        marginBottom: s(10),
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
        overflow:"hidden"
    },
    mediaView: {
        height: s(150),
        width:'100%',
        backgroundColor:'black'
    },
    contentView:{
        flex:1,
        padding: s(10),
    },
    postDetails:{
        paddingVertical: s(5),
        alignItems:"center",
        flexDirection:"row",
        borderBottomColor:'#D3D3D3',
        borderBottomWidth: 0.5
    },
    titleView:{
        flex:1,
    },
    dateView:{
        flex:1,
        alignItems:'flex-end',
        paddingBottom: 5
    },
    titleTxt:{
        fontSize: s(18),
        fontWeight:'600'
    },
    desctxt:{
        paddingTop: s(10),
        fontSize: s(15),
        fontWeight:'400', 
    },
    addBtn:{
        height: s(50),
        width:s(50),
        backgroundColor:'red',
        position:"absolute",
        bottom: s(30),
        borderRadius: s(50),
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    btnTxt:{
        fontWeight:'bold',
        fontSize: 18,
        color: "#fff"
    },
    addIcon:{
        height: 25,
        width: 25,
        tintColor:'#fff'
    },
    shareBtn:{
        padding: 5,
        position:"absolute",
        right: 10,
        top: 10,
        justifyContent:"center",
        alignItems:"center"
    },
    shareIcon :{
        height: 20,
        width: 20,
        tintColor:'#fff'
    },
    emptyContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Styles;