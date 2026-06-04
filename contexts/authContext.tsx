import { auth, firestore } from "@/config/firebase";
import { AuthContextType, UserType } from "@/types";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";




const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserType>(null);
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (firebaseUser) => {
            console.log("firebase user: ", firebaseUser);
            if (firebaseUser && firebaseUser.emailVerified) {
    setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName,
    });

    updateUserData(firebaseUser.uid);
    router.replace("/(tabs)");
    } else {
        setUser(null);
        router.replace("/(auth)/welcome");
    }
        });

        return () => unsub();
    }, []);

    const login = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        if (!userCredential.user.emailVerified) {
            return {
                success: false,
                msg: "Please verify your email before logging in.",
            };
        }

        return { success: true };
        } catch (error: any) {
        let msg = error.message;
        console.log("error message: ", msg);

        if (msg.includes("(auth/invalid-credential)"))
            msg = "Wrong Credentials";

        if (msg.includes("(auth/invalid-email)"))
            msg = "Invalid Email";

        return { success: false, msg };
       }
    };

    const register = async (
    email: string,
    password: string,
    name: string
) => {
    try {
        let response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        // Send verification email
        await sendEmailVerification(response.user);

        await setDoc(doc(firestore, "users", response.user.uid), {
            name,
            email,
            uid: response.user.uid,
        });

        return {
            success: true,
            msg: "Verification email sent",
        };
        } catch (error: any) {
            let msg = error.message;
                console.log("error message: ", msg);

            if (msg.includes("(auth/email-already-in-use)"))
                msg = "Email already in use";

            if (msg.includes("(auth/invalid-email)"))
                msg = "Invalid Email";

            return { success: false, msg };
        }
    };

    const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);

    return {
      success: true,
      msg: "Password reset email sent",
    };
  } catch (error: any) {
    return {
      success: false,
      msg: error.message,
    };
  }
};

    const updateUserData = async (uid: string) => {
        try {
            const docRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            const data = docSnap.data();
            const userData: UserType = {
                uid: data?.uid,
                email: data?.email || null,
                name: data?.name || null,
                image: data?.image || null,
            };
            setUser({ ...userData });
            }
        } catch (error: any) {
            let msg = error.message;
            // return { success: false, msg };
            console.log("error: ", error);
        }
    };

    const contextValue: AuthContextType = {
        user,
        setUser,
        login,
        register,
        updateUserData,
        resetPassword,
    };
        
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
 };


export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be wrapped inside AuthProvider");
    }
    return context;
};

