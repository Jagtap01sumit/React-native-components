import { StatusBar } from "expo-status-bar";
import { isValidElement, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default function BottomSheet() {
  const [visible, setVisible] = useState(false);
  const appNames = [];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={{ color: "white", fontSize: 40, fontWeight: 700 }}>+</Text>
      </TouchableOpacity>
      {visible ? (
        <Modal
          isVisible={true}
          style={{ margin: 0, width: "100%" }}
          onTouchCancel={() => {
            setVisible(false);
          }}
          onBackdropPress={() => setVisible(false)}
          onBackButtonPress={() => setVisible(false)}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 200,

              backgroundColor: "white",
              width: "100%",
            }}
          >
            <View style={{ borderWidth: 1, margin: 2, padding: 10 }}>
              <Text>list of app names</Text>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
