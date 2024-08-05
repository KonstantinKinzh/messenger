// React
import { Fragment } from "react/jsx-runtime";

// Custom hooks
import { useDisplayMenu } from "@/shared/hooks/useDisplayMenu";

// Interface
interface IProps {
    widthIcon: number,
    heightIcon: number,
    children?: React.ReactNode;
};

// Icon
import BurgerIcon from "@/shared/resources/icons/menuSettings/burger.png";

// Styles
import OverlayCss from "@/shared/styles/overlay.module.css";
import "./BtnMenu.css";

export function BtnMenu(props: IProps) {

    const {
        widthIcon,
        heightIcon,
        children
    } = props;

    const {
        isActiveMenu,
        clickBtnMenu,
        clickEsc,
        clickOverlay
    } = useDisplayMenu();

    return (
        <Fragment>
            <img
                src={BurgerIcon}
                className="burger"
                style={{
                    width: `${widthIcon}px`,
                    height: `${heightIcon}px`
                }}
                onClick={clickBtnMenu}
                alt="Изображение бургера" />

            {isActiveMenu &&
                <div
                    onKeyDown={clickEsc}
                    onClick={clickOverlay}
                    className={`overlay ${OverlayCss.overlay}`}>
                    {children}
                </div>
            }
        </Fragment>
    );
};