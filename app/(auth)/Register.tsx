import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { use, useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native';
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
import { useAuth } from '@/contexts/authContext'


const Register = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const { register:registerUser } = useAuth();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current){
        Alert.alert("Sign Up!", "Please fill all the fields");
        return;
    }
    setIsloading(true);
    const res = await registerUser(
        emailRef.current,
        passwordRef.current,
        nameRef.current,
    );
    setIsloading(false);
    console.log("register result: ", res);
    if (!res.success) {
    Alert.alert("Sign Up!", res.msg);
    } else {
        Alert.alert(
            "Verify Email",
            "A verification link has been sent to your email. Please check your Inbox, Spam or Promotion folders and verify your email before logging in."
        );
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
            <Typo size={30} fontWeight={"800"}>
                Let's, 
            </Typo> 
            <Typo size={30} fontWeight={"800"}>
                Get Started
            </Typo> 
        </View>

        {/* Form */}
        <View style={styles.form}>
            <Typo size={16} color={colors.textLight}>
                Create an account to track your expenses
            </Typo>
            <Input 
                placeholder="Enter your name"
                onChangeText={(value) => nameRef.current = value}
                icon={
                    <Icons.UserIcon
                    size={verticalScale(26)} 
                    color={colors.neutral300} 
                    weight="fill" 
                    />
                }
            />
            <Input 
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={(value) => emailRef.current = value}
                icon={
                    <Icons.AtIcon 
                    size={verticalScale(26)} 
                    color={colors.neutral300} 
                    weight="fill" 
                    />
                }
            />
            <Input 
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={(value) => passwordRef.current = value}
                icon={
                    <Icons.LockIcon 
                    size={verticalScale(26)} 
                    color={colors.neutral300} 
                    weight="fill" 
                    />
                }
            />
            

            <Button loading={isLoading} onPress={handleSubmit}>
                <Typo fontWeight={'700'} color={colors.black} size={21}>
                    Sign Up
                </Typo>
            </Button>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Typo size={15}> 
                Already have an account?
            </Typo>
            <Pressable onPress={() => router.navigate('/(auth)/Login')}>
                <Typo size={15} fontWeight={"700"} color={colors.primary}>
                    Login
                </Typo> 
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text,
    },
    form:{
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15),
    },
})
       
