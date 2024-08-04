// Types
type TCount = {
    count: number;
};

// Styles
import "./Preloader.css";

export function Preloader({ count }: TCount) {
    return (
        <div className="prelouder-wrapper">
            <span className="prelouder-inner" />
            <span className="counter">
                {count}
            </span>
        </div>
    );
};