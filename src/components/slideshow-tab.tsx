import { StyleSheet, Text, View, Button } from 'react-native';

const SlideShowTab = ({ totalCardsNumber, index, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{index + 1}/{totalCardsNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginTop: 20
    },
    counterText: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  });

export default SlideShowTab;