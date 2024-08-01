// Firebase
import { auth } from "@/firebase/modules";
import { signInWithEmailAndPassword } from "firebase/auth";

// Mobx Store
import { rootStore } from "@/stores/rootStore";

export const toAuth = async (states: any, navigate: (path: string) => void) => {
    const email = states.emailState;
    const password = states.passwordState;
    const setStore = rootStore.userStore.setToken;

    try {
        const dataRes = await signInWithEmailAndPassword(auth, email, password);
        const user = dataRes.user;
        const token = await user.getIdToken();

        const dataActiveUser = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            metadata: user.metadata,
            token: token,
        };

        setStore(dataActiveUser);
        localStorage.setItem('dataUserActive', JSON.stringify(dataActiveUser));

        navigate("/chat");
    } catch (error) {
        console.log(error);
    };

};