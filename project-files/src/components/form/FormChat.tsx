// React router
import { NavLink, useNavigate } from "react-router-dom";

// Interfaces
import { IDynamicFormProps } from './interfaces/interfaces';

// Custom hook
import { useInputChange } from './hooks/useInputChange';

// Styles
import "./FormChat.css";



export const FormChat = (props: IDynamicFormProps) => {
    const { header, inputs, nameBtn, onSubmit } = props;
    const { states, getInputValue, defineState } = useInputChange();
    const navigate = useNavigate();

    return (
        <form
            className="form"
            onSubmit={(e) => {
                onSubmit(states, navigate);
                e.preventDefault()
            }}>
            <div className="form__inner">

                <h2 className="form__header">{header}</h2>

                {inputs.map((input, index) => (
                    <input
                        id={`${index}`}
                        key={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={defineState(input.nameState)}
                        onChange={(e) => getInputValue(e, input.nameState)}
                        className="form__input"
                    />
                ))}

                <button
                    type="submit"
                    className="form__btn">
                    {nameBtn}
                </button>

                {/* Ссылки на формы */}

                {
                    header === "Регистрация" &&
                    <NavLink to="/" className="link">
                        Авторизация
                    </NavLink>
                }

                {
                    header === "Авторизация" &&
                    <NavLink to="/register" className="link">
                        Регистрация
                    </NavLink>
                }

            </div>
        </form>
    );
};