// Types
type TCount = {
    width: number;
    height: number;
    count?: number;
};

// Styles
import "./Preloader.css";

export function Preloader(props: TCount) {
    const {  width, height, count, } = props;

    return (
        <div className="prelouder-wrapper">
            <span
                className="prelouder-inner"
                style={{
                    width: `${width}px`,
                    height: `${height}px`
                }} />
            <span className="counter">
                {count}
            </span>
        </div>
    );
};