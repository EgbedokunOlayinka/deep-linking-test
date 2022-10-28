import React, {useCallback, useMemo, useRef, useState} from 'react';
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
  PanResponder,
} from 'react-native';

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

const OnboardingTwoScreen = () => {
  const [stage, setStage] = useState(0);

  const dotOne = useRef(new Animated.Value(0)).current;
  const dotTwo = useRef(new Animated.Value(0)).current;
  const dotThree = useRef(new Animated.Value(0)).current;

  const moveRight = useCallback(
    (val: number) => {
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
    },
    [dotOne, dotTwo, dotThree],
  );

  const moveLeft = useCallback(
    (val: number) => {
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
    },
    [dotOne, dotTwo, dotThree],
  );

  const layoutShiftForward = () => {
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
  };

  const layoutShiftBackward = () => {
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
  };

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      //   useNativeDriver: false,
      // }),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 0) {
          console.log(stage);
          if (stage === 2) {
            return;
          }

          layoutShiftForward();
          moveRight(stage);
          setStage(prev => prev + 1);
        } else if (gestureState.dx > 0) {
          if (stage === 0) {
            return;
          }
          layoutShiftBackward();
          moveLeft(stage);
          setStage(prev => prev - 1);
        }
      },
    });
  }, [stage, pan, moveLeft, moveRight]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Afritickets</Text>

      <Animated.View style={styles.swipeWrapper} {...panResponder.panHandlers}>
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
      </Animated.View>

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
  swipeWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default OnboardingTwoScreen;
