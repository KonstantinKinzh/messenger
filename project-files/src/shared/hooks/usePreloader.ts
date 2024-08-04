import { useState, useEffect, useRef } from "react";

export const usePreloader = (directionArg: string, timer: number) => {
    const [count, setCount] = useState(timer);
    const [direction, setDirection] = useState(directionArg);
    const timerId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const countSsString = sessionStorage.getItem("count");
        const countSS = Number(countSsString);

        if (countSsString === null) {
            console.log("Начальное значение прелоудера");
        } else if (Number(countSsString) > 0) {
            setCount(countSS);
        } else if (Number(countSsString) === 0) {
            setCount(countSS);
        };

    }, []);


    useEffect(() => {
        if (direction === "forward") {

            // Очищаем предыдущий таймер, если он существует
            if (timerId.current) clearInterval(timerId.current);

            // Устанавливаем новый таймер
            timerId.current = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount > 0) {
                        sessionStorage.setItem("count", (prevCount - 1).toString());
                        return prevCount - 1;
                    } else {
                        clearInterval(timerId.current!);
                        return 0; // Остановить на 0
                    }
                });
            }, 1000);

        };

        return () => {
            if (timerId.current) clearInterval(timerId.current);
        };

    }, [count, direction]);



    const updateCount = (direction: string, newCount: number) => {

        if (count !== 0) {
            alert(`Следующий запрос можно отправить не менее чем через ${timer} секунд`);
            return;
        };
        setDirection(direction);
        setCount(newCount);
    };

    return { count, updateCount };
};