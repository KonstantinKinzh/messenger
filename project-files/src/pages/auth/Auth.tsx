// React
import { FormChat } from "@/components/form";

// Consts
import { inputs } from "./consts/inputs";

// Utils
import { toAuth } from "./utils/toAuth";

// Styles
import "./Auth.css";

export function Auth() {
    return (
        <div className="auth">
            <FormChat
                header="Авторизация"
                inputs={inputs}
                onSubmit={toAuth}
                nameBtn="Авторизоваться"
            />
        </div>
    );
};