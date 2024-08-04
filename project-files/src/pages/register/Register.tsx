// Mobx
import { observer } from "mobx-react";

// Components
import { FormChat } from "@/components/form";
import { WindowError } from "@/components/windowError";

// Consts
import { inputs } from "./consts/inputs";

// Utils
import { toRegister } from "./utils/toRegister";

// Styles
import "./Register.css";

// Stores
import { dataErrPass } from "@/shared/error/store/dataErrorStore";

export const Register = observer(() => {
    const isOpenWinErr = dataErrPass.isOpenWInErr;
    return (
        <div className="register">
            <FormChat
                header="Регистрация"
                inputs={inputs}
                onSubmit={toRegister}
                nameBtn="Зарегистрироваться"
            />

            {isOpenWinErr &&
                <WindowError
                    instanceStore={dataErrPass}
                />
            }
        </div>
    );
});