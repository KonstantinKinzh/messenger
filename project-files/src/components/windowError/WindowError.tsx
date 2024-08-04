// Mobx
import { observer } from "mobx-react";

// Styles
import "./WindowError.css";

export const WindowError = observer(({instanceStore}:any) => {
    const { dataError, hideWinError } = instanceStore;
    const titleErr = dataError.titleErr;
    const messageErr = dataError.messageErr;

    return (
        <div className="window-error-wrapper">
            <div className="window-error">
                <div className="window-error__inner">

                    <h2 className="window-error__header">{titleErr}</h2>

                    <p className="window-error__message">
                        {messageErr}
                    </p>

                    <button
                        onClick={hideWinError}
                        className="form__btn"
                    >
                        {"ОК"}
                    </button>
                </div>
            </div>
        </div>
    );
});