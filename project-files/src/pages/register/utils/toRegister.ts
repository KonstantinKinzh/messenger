// Firebase
import { auth } from "@/firebase/modules";
import { createUserWithEmailAndPassword, } from "firebase/auth";

// Local Storage
import { setDataLS } from "@/shared/localStorage/setDataLS";

// Interface
import { IError } from "@/shared/types/errorInterface";

// Function global
import { handleError } from "@/shared/error/handleError";

// Store
import { dataErrPass } from "@/shared/error/store/dataErrorStore";



export const toRegister = async (states: any, navigate: (path: string) => void) => {
    const email = states.emailState;
    const password = states.passwordState;
    const setDataError = dataErrPass.setDataError;

    try {
        // Регистрирует пользователя
        const dataRes = await createUserWithEmailAndPassword(auth, email, password);
        const user = dataRes.user;

        // Доабавляем данные пользователя в localStore
        setDataLS("dataActiveUser", {
            uid: user.uid,
            email: user.email,
            metadata: user.metadata,
        });

        // Перенаправляет на страницу подтверждения почты
        navigate("/chat");

    } catch (error) {
        const errorNew = error as IError;
        handleError(errorNew, setDataError);
    };
};