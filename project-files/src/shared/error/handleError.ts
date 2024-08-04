// Interface
import { IError } from "../types/errorInterface";
import { IDataError } from "./interfaces/interface";

// Error Messages
import { ERROR_MESSAGES } from "./errorMessages/errorMessages";

// Определяем тип ключей ERROR_MESSAGES
type TCodeError = keyof typeof ERROR_MESSAGES | undefined;

export const handleError = (error: IError, setDataError: (data: IDataError) => void) => {
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