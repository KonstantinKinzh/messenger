// Interface
import { IError } from "../types/errorInterface";
import { TDataError, TCodeError } from "./types/types";

// Error Messages
import { ERROR_MESSAGES } from "./errorMessages/errorMessages";

export const handleError = (error: IError, setDataError: (data: TDataError) => void) => {
    const codeErr: TCodeError = error.code as TCodeError;
    if (typeof codeErr === 'string') {
        const { titleErr, messageErr } = ERROR_MESSAGES[codeErr];
        setDataError({
            titleErr,
            messageErr,
        });
        throw new Error(messageErr);
    };
};