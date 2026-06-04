import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import Typo from '@/components/Typo';
import Button from '@/components/Button';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const welcome = () => {
  const router = useRouter(); 
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login button and Image */}
        <View>
          <TouchableOpacity onPress={() => router.push('/(auth)/Login')} style={styles.loginButton}>
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>
          <Animated.Image
            entering = {FadeIn.duration(1000)}
            source={require('../../assets/images/tobi.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />  
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Animated.View
           entering={FadeInDown.duration(1000).springify().damping(60)} 
           style={{ alignItems: 'center', }}
           >
            <Typo size={27} fontWeight={"800"}>
              You need to move on gang
            </Typo>
            <Typo size={27} fontWeight={"800"}>
              She already played you🥀
            </Typo>
          </Animated.View>

          <Animated.View
           entering={FadeInDown.duration(1000).delay(100).springify().damping(60)} 
           style={{ alignItems: 'center', gap: 2 }}>
            <Typo size={17} color={colors.textLight}>
              Stack your bread and she may
            </Typo>
            <Typo size={17} color={colors.textLight}>
              just reconsider💸
            </Typo>
          </Animated.View>
          
          <Animated.View
           entering={FadeInDown.duration(1000).delay(200).springify().damping(60)} 
           style={styles.buttonContainer}>
            <Button onPress={() => router.push('/(auth)/Register')}>
              <Typo size={22} color={colors.neutral900} fontWeight={"600"}>
                Get The Bag💰
              </Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
            


      

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(400),
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  },
  });
