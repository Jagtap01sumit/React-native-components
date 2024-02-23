import { StatusBar } from "expo-status-bar";
import { isValidElement, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import BottomSheet from "./components/BottomSheet";
import CustomDrawer from "./components/CustomDrawer";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <CustomDrawer /> */}
      <BottomSheet />
    </>
  );
}

const styles = StyleSheet.create({});
