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


const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const { login: loginUser } = useAuth();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current){
        Alert.alert("Login Failed!", "Please fill all the fields");
        return;
    }
    setIsloading(true);
    const res = await loginUser(emailRef.current, passwordRef.current);
    setIsloading(false);
    if(!res.success){
        Alert.alert("Login Failed!", res.msg);
    }
  };

  const { resetPassword } = useAuth();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
            <Typo size={30} fontWeight={"800"}>
                Hey,
            </Typo> 
            <Typo size={30} fontWeight={"800"}>
                Welcome Back
            </Typo> 
        </View>

        {/* Form */}
        <View style={styles.form}>
            <Typo size={16} color={colors.textLight}>
                Login now to track your expenses
            </Typo>
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

            <Pressable
                style={{ alignSelf: "flex-end" }}
                onPress={async () => {
                if (!emailRef.current) {
                Alert.alert(
                    "Reset Password",
                    "Please enter your email first."
                        );
                return;
                }

                const res = await resetPassword(emailRef.current);

                Alert.alert(
                res.success ? "Success" : "Error",
                res.msg
                );
            }}
            >
            <Typo
                size={14}
                color={colors.text}
            >
                Forgot password?
            </Typo>
            </Pressable>

            <Button loading={isLoading} onPress={handleSubmit}>
                <Typo fontWeight={'700'} color={colors.black} size={21}>
                    Login
                </Typo>
            </Button>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Typo size={15}> 
                Don't have an account?
            </Typo>
            <Pressable onPress={() => router.navigate('/(auth)/Register')}>
                <Typo size={15} fontWeight={"700"} color={colors.primary}>
                    Sign up
                </Typo> 
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

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
       
