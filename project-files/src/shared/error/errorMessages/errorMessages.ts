// Consts
import { ERROR_EMAIL, ERROR_PASSWORD } from "../consts/consts";

export const ERROR_MESSAGES = {
    "auth/email-already-in-use": {
        titleErr: "Ошибка эмейла",
        messageErr: ERROR_EMAIL,
    },

    "auth/weak-password": {
        titleErr: "Короткий пароль",
        messageErr: ERROR_PASSWORD
    },
};