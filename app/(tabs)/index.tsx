import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import data from "../../data.json";

export default function Index() {

  return (

    <ScrollView>

      <View style={styles.container}>

        {
          data.map((item) => (

            <View style={styles.card} key={item.id}>

              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />

              <View style={styles.content}>

                <Text style={styles.title}>
                  {item.title}
                </Text>

                <Text style={styles.description}>
                  {item.description}
                </Text>

                <Text style={styles.price}>
                  ${item.price}
                </Text>

              </View>

            </View>

          ))
        }

      </View>

    </ScrollView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: "#f2f2f2",
  },

  card: {
    width: 320,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "gray",
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },

});