// Mobx
import { observer } from "mobx-react";

// Components
import { FormAuth } from "@/components/form";
import { WindowError } from "@/components/windowError";

// Stores
import { dataErrRegister } from "@/shared/error/store/dataErrorStore";

// Consts
import { inputs } from "./consts/inputs";

// Utils
import { toRegister } from "./utils/toRegister";

// Styles
import "./Register.css";


export const Register = observer(() => {
    const isOpenWinErr = dataErrRegister.isOpenWInErr;
    return (
        <div className="register">
            <FormAuth
                header="Регистрация"
                inputs={inputs}
                onSubmit={toRegister}
                nameBtn="Зарегистрироваться" />

            {isOpenWinErr &&
                <WindowError instanceStore={dataErrRegister} />
            }
        </div>
    );
});