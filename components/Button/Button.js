// React Packages
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

// Assets
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Main Component
export default function Button({ icon, label, onPress, style: containerStyle, iconStyle, labelStyle }) {
  return (
    <TouchableHighlight style={{ borderRadius: containerStyle?.borderRadius ?? styles.button.borderRadius }} onPress={onPress}>
      <View style={[styles.button, containerStyle]}>
        {icon && <MaterialCommunityIcons name={icon} style={[styles.icon, iconStyle]} />}
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
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
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
});