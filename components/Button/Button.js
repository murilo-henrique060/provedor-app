// React Packages
import { Text, View, TouchableHighlight, ActivityIndicator, StyleSheet } from 'react-native';

// Assets
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Main Component
export default function Button({ icon, label, loading, onPress, style: containerStyle, iconStyle, labelStyle, loadingSize }) {
  return (
    <TouchableHighlight style={{ borderRadius: containerStyle?.borderRadius ?? styles.button.borderRadius }} onPress={onPress}>
      <View style={[styles.button, containerStyle]}>
        {loading ? <ActivityIndicator color={iconStyle?.color ?? styles.icon.color} size={loadingSize ?? "small"}/> : icon && <MaterialCommunityIcons name={icon} style={[styles.icon, iconStyle]} />}
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