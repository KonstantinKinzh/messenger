// Firebase
import { auth } from "@/firebase/modules";
import { signInWithEmailAndPassword } from "firebase/auth";

// Local Storage
import { setDataLS } from "@/shared/localStorage/setDataLS";

// Interfaces
import { IError } from "@/shared/types/errorInterface";

// Function global
import { handleError } from "@/shared/error/handleError";

// Store
import { dataErrAuth } from "@/shared/error/store/dataErrorStore";


export const toAuth = async (states: any, navigate: (path: string) => void) => {
    const email = states.emailState;
    const password = states.passwordState;
    const setDataError = dataErrAuth.setDataError;

    try {
        const dataRes = await signInWithEmailAndPassword(auth, email, password);
        const user = dataRes.user;

        const dataActiveUser = {
            uid: user.uid,
            email: user.email,
            metadata: user.metadata,
        };

        setDataLS("dataActiveUser", dataActiveUser);

        navigate("/chat");
    } catch (error) {
        const errValid = error as IError;
        console.log(errValid.code);
        handleError(errValid, setDataError);
    };
};