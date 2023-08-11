import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Task =(props)=>{
  return  (
  <View style={styles.item}>
    <View style={styles.itemleft}>
        <View style={styles.sqaure}>
        </View>
        <Text style={styles.itemText}>
            {props.text}
        </Text>
    </View>
        <View style={styles.circular}>

        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    item:{
        backgroundColor:'#dce6c5',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemleft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    sqaure:{
        width:24,
        height:24,
        backgroundColor:'#435221',
        opacity:.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',

    },
    circular:{
        width:12,
        height:12,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#1b2602'
    },
});

export default Task;