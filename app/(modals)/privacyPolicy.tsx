import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import ModalWrapper from "@/components/ModalWrapper";
import Typo from "@/components/Typo";
import { spacingX, spacingY } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const PrivacyPolicy = () => {
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header
          title="Privacy Policy"
          leftIcon={<BackButton />}
          style={{ marginBottom: spacingY._10 }}
        />


        <ScrollView showsVerticalScrollIndicator={false}>
          <Typo>
            This application stores user account information, wallets and
            transaction data using Firebase services.
          </Typo>

          <Typo style={styles.text}>
            The collected information is used only to provide the functionality
            of the expense tracker application.
          </Typo>

          <Typo style={styles.text}>
            We do not sell, rent, or share your personal information with third
            parties.
          </Typo>

          <Typo style={styles.text}>
            Users can request deletion of their account and associated data at
            any time.
          </Typo>

          <Typo style={styles.text}>
            Last Updated: June 2026
          </Typo>
        </ScrollView>
      </View>
    </ModalWrapper>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    gap: spacingY._15,
  },
  text: {
    marginTop: 12,
  },
});