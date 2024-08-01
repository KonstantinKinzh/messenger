import { auth } from "@/firebase/modules";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const toRegister = async (states: any, navigate: (path: string) => void) => {
    const email = states.emailState;
    const password = states.passwordState;

    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
            });
        navigate("/chat");
    } catch (error) {
        console.log(error);
    };
};