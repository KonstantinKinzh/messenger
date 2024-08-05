import { useEffect, useState } from "react";

export const useDisplayMenu = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    
    useEffect(() => {
        if (isActiveMenu) {
            window.addEventListener("keydown", clickEsc);
        };

        return () => {
            window.removeEventListener("keydown", clickEsc);
        }
    }, [isActiveMenu]);


    const clickBtnMenu = () => {
        setIsActiveMenu(prev => !prev);
    };


    const clickEsc = (e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
            setIsActiveMenu(false);
        };
    };


    const clickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
        const classItem = (e.target as HTMLDivElement).classList.contains("overlay");
        if (classItem) {
            setIsActiveMenu(false);
        };
    };


    return { isActiveMenu, clickBtnMenu, clickEsc, clickOverlay };
};