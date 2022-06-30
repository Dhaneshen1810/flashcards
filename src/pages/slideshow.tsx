import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SlideShowTab } from '../components';
import GestureFlipView from 'react-native-gesture-flip-card';

const RenderFront = ({ text }) => {
    return (
      <View  style={[styles.card, styles.front]}>
        <Text style={{fontSize: 25, color: '#fff'}}>{text}</Text>
      </View>
    );
  };

  const RenderBack = ({ text }) => {
    return (
      <View style={[styles.card, styles.back]}>
        <Text style={{fontSize: 25, color: '#fff'}}>{text}</Text>
      </View>
    );
  }

const SlideShow = ({ route, navigation }) => {
    const { title, cards } = route.params;
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextCard = () => {
        if (activeCardIndex < cards.length - 1) {
            setActiveCardIndex(activeCardIndex + 1)
        }
    }

    const handlePreviousCard = () => {
        if (activeCardIndex > 0) {
            setActiveCardIndex(activeCardIndex - 1)
        }
    }

    const CardFlippable = ({ card }) => {
        return (
            <GestureFlipView width={300} height={300} gestureEnabled>
                <RenderFront text={card.question} />
                <RenderBack text={card.answer} />
            </GestureFlipView>
        );
    }

    return (
        <View>
            <SlideShowTab navigation={navigation} totalCardsNumber={cards.length} index={activeCardIndex} />
            <View style={styles.container}>
                <CardFlippable card={cards[activeCardIndex]} />
                <View style={styles.buttonContainer}>
                    <Button title='Previous' onPress={() => handlePreviousCard()} />
                    <Button title='Next' onPress={() => handleNextCard()} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 25,
        alignItems: 'center'
    },
    card: {
        width: 300,
        height: 300,
        borderRadius: 7,
        elevation: 20,
        padding: 10,
        shadowColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    front: {
        backgroundColor: 'grey'
    },
    back: {
        backgroundColor: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        display: 'flex',
        padding: 5,
        justifyContent: 'space-between',
        marginTop: 20,
    }
  });

export default SlideShow;