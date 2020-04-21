/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
// import { WebView } from "react-native-webview";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Button title="弹窗" color="#f66" onPress={() => { setModalVisible(!modalVisible); }} />
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            hardwareAccelerated={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.modal}
          >
            <Button title="关闭" color="#f0f" onPress={() => { setModalVisible(!modalVisible); }} />
            {/* <WebView
              source={{ uri: "http://106.54.128.146" }}
              style={{ marginTop: 20 }}
              onLoadProgress={e => console.log(e.nativeEvent.progress)}
            /> */}
            {/* <View style={{ marginTop: 22 }}>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View> */}
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f66',
  },
  modal: {
    backgroundColor: '#00f'
  }
});

export default App;
