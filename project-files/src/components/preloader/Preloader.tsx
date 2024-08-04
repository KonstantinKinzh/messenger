// Types
type TCount = {
    count?: number;
    width: number;
    height: number;
};

// Styles
import "./Preloader.css";

export function Preloader(props: TCount) {
    const { count, width, height } = props;

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