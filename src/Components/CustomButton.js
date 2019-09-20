import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton(props) {

    const styles = StyleSheet.create({
        btn:{
            marginTop: 5,
            borderWidth: 1,
            backgroundColor: props.colorBtn,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 3
          },
          txtBtn:{
            color: props.colorTxtBtn,
            fontWeight: 'bold',
            fontSize: 20
          },
    })
    
    return (
    <TouchableOpacity style={styles.btn} onPress={ props.onPress }>
        <Text style={styles.txtBtn}>{props.txtBtn}</Text>
    </TouchableOpacity>
    )

}