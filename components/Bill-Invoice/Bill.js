// React Packages
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Custom Packages
import { formatDateText, formatDate, formatMoney } from '../../utils/billFormatter';

// Custom Components
import Button from '../Button/Button';

// Assets
import { MaterialCommunityIcons } from 'react-native-vector-icons';

// Main Component
export default function Bill({ bill }) {
  const [open, setOpen] = useState(false);
  const bodyHeight = useSharedValue(0);
  const iconRotation = useSharedValue(0);

  const date = formatDateText(bill.originalDueDate);
  const value = formatMoney(bill.value);
  const dueDate = formatDate(bill.dueDate);
  const bankSlipUrl = bill.bankSlipUrl;

  const billHeightAnimation = useAnimatedStyle(() => {
    return {
      height: bodyHeight.value,
    }
  });

  const iconRotationAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${iconRotation.value}deg` }],
    }
  });

  const toggleBill = () => {
    bodyHeight.value = withTiming(open ? 0 : 104, { duration: 400 });
    iconRotation.value = withTiming(open ? 0 : 180, { duration: 400 });
    setOpen(!open);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => toggleBill()}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>{date}</Text>

          <Animated.View style={iconRotationAnimation}>
            <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.body, billHeightAnimation]}>
        <View style={styles.info}>
          <Text>Valor: {value}</Text>
          <Text>Vencimento: {dueDate}</Text>
        </View>

        <View style={styles.buttonRow}>
          <Button label="Visualizar Boleto" labelStyle={styles.textBody}/>
          <Button label="Baixar Boleto" labelStyle={styles.textBody}/>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    width: '100%',
    padding: 20,

    borderRadius: 10,

    elevation: 5,

    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    overflow: 'hidden',
    gap: 10,
  },
  info: {
    paddingTop: 10,
    gap: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    gap: 10,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 14,
  },
});