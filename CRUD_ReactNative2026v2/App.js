import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTab from './AppTab';


export default function App() {
  return (
    <>
      <AppTab />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 77, 158, 0.53)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
