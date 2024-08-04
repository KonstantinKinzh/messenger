// Consts
import { messaging } from "firebase-admin";
import {
    ERROR_EMAIL,
    ERROR_PASSWORD,
    ERROR_MANY_REQUEST,
    ERROR_EMAIL_AND_PASSWORD
} from "../consts/consts";

export const ERROR_MESSAGES = {
    "auth/email-already-in-use": {
        titleErr: "Ошибка эмейла",
        messageErr: ERROR_EMAIL,
    },

    "auth/weak-password": {
        titleErr: "Короткий пароль",
        messageErr: ERROR_PASSWORD
    },

    "auth/too-many-requests": {
        titleErr: "Ошибка авторизации",
        messageErr: ERROR_MANY_REQUEST,
    },

    "auth/invalid-credential": {
        titleErr: "Ошибка авторизации",
        messageErr: ERROR_EMAIL_AND_PASSWORD,
    }
};