import { useState } from "react";
import { ActivityIndicator, Alert, Button, Modal, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);

  const styles = StyleSheet.create({

    bagroundColour: {
      backgroundColor: 'white',
      color: 'white'
    },
    backgroundSize: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    
    }

  })

  return (
    <View style={[styles.backgroundSize , styles.bagroundColour]}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <Text>Utso Roy</Text>

      <Button title="Press me" onPress={() => setVisible(true)} />
      <Button title= "Alert" onPress={()=>Alert.alert("Alert Message ")}></Button>
      <Modal
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={visible}
      >

        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <ActivityIndicator size="small"
            animating={true}
            
          
            color="blue" />
    </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: 250,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text>My Modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
