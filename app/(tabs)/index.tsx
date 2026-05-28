import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import data from "../../data.json";

export default function Index() {

  const renderCard = ({ item }) => (

    <View style={styles.card}>

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

  );

  return (

    <FlatList
      data={data}

      renderItem={renderCard}

      keyExtractor={(item) => item.id.toString()}

      showsVerticalScrollIndicator={false}

      contentContainerStyle={{
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        paddingBottom: 40,
      }}

      ItemSeparatorComponent={() => (
        <View style={{ height: 20 }} />
      )}
      ListHeaderComponent={<Text style={styles.header} >Welcome to Our Course </Text>}

    />

  );
}

const styles = StyleSheet.create({

  card: {
    width: 320,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",

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
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color : 'green'
    
  }

});