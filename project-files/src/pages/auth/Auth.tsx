// React
import { FormAuth } from "@/components/form";

import { observer } from "mobx-react";

// Components
import { WindowError } from "@/components/windowError";

// Store
import { dataErrAuth } from "@/shared/error/store/dataErrorStore";

// Consts
import { inputs } from "./consts/inputs";

// Utils
import { toAuth } from "./utils/toAuth";

// Styles
import "./Auth.css";

export const Auth = observer(() => {
    const isOpen = dataErrAuth.isOpenWInErr;
    return (
        <div className="auth">
            <FormAuth
                header="Авторизация"
                inputs={inputs}
                onSubmit={toAuth}
                nameBtn="Авторизоваться"
            />
            {isOpen && <WindowError instanceStore={dataErrAuth} />}
        </div>
    );
});