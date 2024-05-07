// React Packages
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// Main Component
export default function SpeedTestScreen() {
  return (
    <WebView style={styles.webView} source={{ uri: 'https://www.speedtest.net/pt' }} setBuiltInZoomControls={false}/>
  )
}

// Styles
const styles = StyleSheet.create({
  webView: {
    backgroundColor: '#151526',
  }
});