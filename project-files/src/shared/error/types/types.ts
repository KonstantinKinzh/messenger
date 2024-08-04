// Consts
import { ERROR_MESSAGES } from "../errorMessages/errorMessages";

export type TDataError = {
    titleErr: string;
    messageErr: string
};

export type TCodeError = keyof typeof ERROR_MESSAGES | undefined;