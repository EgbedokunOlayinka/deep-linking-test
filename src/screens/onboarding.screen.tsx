{
  /* <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={10}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
      >
        {screenData.map(screen => (
          <View style={styles.box} key={screen.name}>
            <View style={[styles.boxTwo, {backgroundColor: screen.color}]} />
          </View>
        ))}
      </ScrollView> */
}

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  Image,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';

const imgOne = require('../assets/images/edo-logo-bg.png');
const imgTwo = require('../assets/images/kogi-logo-bg.jpeg');
const imgThree = require('../assets/images/lagos-tax-big.png');

const screenData = [
  {img: imgOne, color: 'green', text: 'Screen One'},
  {img: imgTwo, color: 'red', text: 'Screen Two'},
  {img: imgThree, color: 'black', text: 'Screen Three'},
];

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const OnboardingScreen = () => {
  const [stage, setStage] = useState(0);

  const translateX = useSharedValue(0);

  const dotOne = useRef(new Animated.Value(0)).current;
  const dotTwo = useRef(new Animated.Value(0)).current;
  const dotThree = useRef(new Animated.Value(0)).current;

  const gesture = Gesture.Pan()
    .onUpdate(event => {
      translateX.value = event.translationX;
    })
    .onFinalize(() => {
      if (translateX.value < 0) {
        // if swipe is to the left
        if (stage === 2) {
          return;
        }
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        LayoutAnimation.configureNext({
          duration: 300,
          create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
          },
          update: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
          },
          delete: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
            // delay: 1500,
          },
        });
        moveRight(stage);
        setStage(prev => prev + 1);
      } else if (translateX.value > 0) {
        // if swipe is to the right
        if (stage === 0) {
          return;
        }
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        LayoutAnimation.configureNext({
          duration: 300,
          create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
          },
          update: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
          },
          delete: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
            // delay: 1500,
          },
        });
        moveLeft(stage);
        setStage(prev => prev - 1);
      }
    });

  const moveRight = (val: number) => {
    if (val === 0) {
      Animated.parallel([
        Animated.timing(dotOne, {
          toValue: 18,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dotTwo, {
          toValue: -18,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(dotOne, {
          toValue: 36,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dotThree, {
          toValue: -18,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const moveLeft = (val: number) => {
    if (val === 2) {
      Animated.parallel([
        Animated.timing(dotOne, {
          toValue: 18,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dotThree, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(dotOne, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dotTwo, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Afritickets</Text>
      <GestureDetector gesture={gesture}>
        <View style={{flex: 1, width: '100%', paddingHorizontal: 16}}>
          {screenData.map(
            (screen, index) =>
              index === stage && (
                <Animated.View key={screen.color} style={[styles.box]}>
                  <View style={styles.imgView}>
                    <Image source={screen.img} />
                  </View>
                  <Text style={styles.imgText}>{screen.text}</Text>
                </Animated.View>
              ),
          )}
        </View>
      </GestureDetector>

      <View style={styles.dotContainer}>
        <Animated.View
          style={[
            styles.dot,
            styles.dotOne,
            {transform: [{translateX: dotOne}]},
          ]}
        />
        <Animated.View
          style={[styles.dot, {transform: [{translateX: dotTwo}]}]}
        />
        <Animated.View
          style={[styles.dot, {transform: [{translateX: dotThree}]}]}
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  btn: {
    backgroundColor: '#25a75c',
    padding: 16,
    borderRadius: 4,
    marginTop: 20,
    width: '80%',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  btnsContainer: {
    marginTop: 40,
    width: '100%',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 12,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  boxTwo: {
    borderRadius: 4,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 24,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotOne: {
    backgroundColor: '#333',
  },
  imgText: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 24,
  },
  imgView: {
    height: 300,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
