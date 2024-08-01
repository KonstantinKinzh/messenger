// Components
import { FormChat } from "@/components/form";

// Consts
import { inputs } from "./consts/inputs";

// Utils
import { toRegister } from "./utils/toRegister";

// Styles
import "./Register.css";



export function Register() {
    return (
        <div className="register">
            <FormChat
                header="Регистрация"
                inputs={inputs}
                onSubmit={toRegister}
                nameBtn="Зарегистрироваться"
            />
        </div>
    );
};