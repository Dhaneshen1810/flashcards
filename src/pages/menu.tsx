import { StyleSheet, Text, View, Button } from 'react-native';

const Menu = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Button title='Flashcards' onPress={() => navigation.navigate('Flashcards')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Menu;