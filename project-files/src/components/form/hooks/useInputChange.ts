import { useState } from "react";

export const useInputChange = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const states = {
        emailState: email,
        passwordState: password,
    };

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>, nameState: string) => {
        const inputValue = e.target.value;

        switch (nameState) {
            case "email":
                setEmail(inputValue);
                break;
            case "password":
                setPassword(inputValue);
                break;
        };
    };

    const defineState = (nameState: string) => {
        switch (nameState) {
            case "email":
                return email;
            case "password":
                return password;
        };
    };

    return {
        states,
        getInputValue,
        defineState,
    };
};