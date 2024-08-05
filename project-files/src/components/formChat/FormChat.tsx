// React
import { useState, useEffect } from "react";

// Components
import { Preloader } from "../preloader";

// Styles
import OverlayCss from "@/shared/styles/overlay.module.css"
import "./FormChat.css";

// Test promise
import { getDataUser } from "@/firebase/getDataUser";

export function FormChat() {
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        const handleGetDataUser = async () => {
            if (isLoad) {
                await getDataUser();
                setIsLoad(false);
            };
        };
        handleGetDataUser();
    }, [isLoad]);

    const sendRequest = () => {
        setIsLoad(true);
    };

    return (
        <div className="form-chat-overlay">

            <div className="from-chat-wrapper">
                <div className="form-chat">
                    <h2 className="form-chat__header">Название формы</h2>

                    <input type="text" placeholder="Введите значение..." />
                    <input type="text" placeholder="Введите значение..." />
                    <input type="text" placeholder="Введите значение..." />

                    <button onClick={() => { sendRequest() }} className="form-chat__btn">
                        Отправить
                    </button>
                </div>
            </div>

            {isLoad &&
                <div className={OverlayCss.overlay}>
                    <Preloader
                        width={40}
                        height={40}
                    />
                </div>
            }

        </div>
    );
};