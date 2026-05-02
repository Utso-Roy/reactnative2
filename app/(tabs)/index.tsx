import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {

  const [visible, setVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <StatusBar backgroundColor="green" barStyle="light-content" />

      <Text style={styles.title}>Utso Roy</Text>

      {/* Multiple Boxes */}
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box2} />
      </View>

      <View style={styles.row}>
        <View style={styles.box3} />
        <View style={styles.box4} />
      </View>

      <Text style={styles.text}>React Native Learning </Text>
      <Text style={styles.text}>Flexbox Practice</Text>
      <Text style={styles.text}>ScrollView Example</Text>

      {/* Buttons */}
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <View style={{ margin: 10 }} />
      <Button title="Show Alert" onPress={() => Alert.alert("Hello Utso")} />

      {/* Modal */}
      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>

            <ActivityIndicator size="large" color="blue" />

            <Text style={{ margin: 10 }}>Loading...</Text>

            <Button title="Close" onPress={() => setVisible(false)} />

          </View>
        </View>
      </Modal>

      {/* Extra Content for Scroll */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Text key={index} style={styles.extraText}>
          Extra Content {index + 1}
        </Text>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    margin: 5,
  
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
    margin: 5,
    position: 'absolute',
    top: 50,

  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    margin: 5,
  },
  box4: {
    width: 80,
    height: 80,
    backgroundColor: "orange",
    margin: 5,
  },
  text: {
    fontSize: 16,
    margin: 5,
  },
  extraText: {
    fontSize: 14,
    margin: 5,
    color: "gray",
  },
  modalBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    width: 250,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});