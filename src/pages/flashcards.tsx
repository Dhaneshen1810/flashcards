import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import FlashcardData from '../data/flashcards-data.json';

const Flashcards = ({ navigation }) => {
    return(
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Slideshow', {
            title: 'Maths',
            cards: FlashcardData.Maths
        })}>
            <Text style={styles.buttonText}>Maths</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Slideshow', {
            title: 'Biology',
            cards: FlashcardData.Biology
        })}>
            <Text style={styles.buttonText}>Biology</Text>
        </Pressable>
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
    button: {
        backgroundColor: '#318CE7',
        width: 100,
        height: 40,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
  });

export default Flashcards;