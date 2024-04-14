import { WebView } from 'react-native-webview';

const SpeedTestScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://www.speedtest.net/pt' }}
      originWhitelist={['https://www.speedtest.net/pt']}
      setBuiltInZoomControls={false}
      thirdPartyCookiesEnabled={false}
      style={{ backgroundColor: '#151526' }}
    />
  )
}

export default SpeedTestScreen;