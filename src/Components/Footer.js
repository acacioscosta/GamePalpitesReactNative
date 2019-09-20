import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Footer(props) {

  return (
      <View style={styles.viewFooter}>
        <Text style={styles.txtFooter}>Acácio S. Costa</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        justifyContent: 'flex-end', 
        marginBottom: 20
    },
    txtFooter:{
        fontSize: 15, 
        textAlign: "center",
        fontWeight: 'bold'
    }
})