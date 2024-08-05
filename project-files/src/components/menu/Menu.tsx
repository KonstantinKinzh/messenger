// Custom hooks
import { useDisplayMenu } from "@/shared/hooks/useDisplayMenu";

// Lib
import { v4 as uuid } from "uuid";

// Consts
import { arrItemsMenu } from "./consts/arrItemsMenu";

// Styles
import OverlayCss from "@/shared/styles/overlay.module.css";
import "./Menu.css";


export function Menu() {
    const { isActiveMenu, clickBtnMenu, clickEsc, clickOverlay } = useDisplayMenu();

    return (
        <div className="menu">
            <div onClick={clickBtnMenu} className="menu-item">

                {arrItemsMenu.map((item) => (
                    <div key={uuid()}>
                        <div className="menu-item__inner">
                            <img
                                src={item.icon}
                                className="menu-item__img"
                                alt="Иконка элемента меню" />

                            <p className="menu-item__name">
                                {item.name}
                            </p>
                        </div>


                        {isActiveMenu &&
                            <div
                                onClick={clickOverlay}
                                onKeyDown={clickEsc}
                                className={OverlayCss.overlay}>
                                {item.component}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};