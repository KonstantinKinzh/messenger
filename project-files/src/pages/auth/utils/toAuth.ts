// Firebase
import { auth } from "@/firebase/modules";
import { signInWithEmailAndPassword } from "firebase/auth";

// Local Storage
import { setDataLS } from "@/shared/localStorage/setDataLS";

export const toAuth = async (states: any, navigate: (path: string) => void) => {
    const email = states.emailState;
    const password = states.passwordState;

    try {
        const dataRes = await signInWithEmailAndPassword(auth, email, password);
        const user = dataRes.user;
        console.log(user);
        const token = await user.getIdToken();

        const dataActiveUser = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            metadata: user.metadata,
            token: token,
        };

        setDataLS("dataActiveUser", dataActiveUser);

        navigate("/chat");
    } catch (error) {
        console.log(error);
    };

};