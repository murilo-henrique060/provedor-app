// React Packages
import { View, TouchableHighlight, StyleSheet } from 'react-native';

// Main Component
export default function Button({ children, onPress, style: customStyle }) {
  return (
    <TouchableHighlight style={{ borderRadius: customStyle?.borderRadius ?? styles.button.borderRadius }} onPress={onPress}>
      <View style={[styles.button, customStyle]}>
        {children}
      </View>
    </TouchableHighlight>
  );
}

// Styles
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,

    borderRadius: 5,

    color: '#fff',
    backgroundColor: '#3f58df',
  },
});