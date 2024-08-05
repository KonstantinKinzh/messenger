// Interface
interface IProps {
    onHandleChange?: React.ChangeEventHandler<HTMLInputElement>
};

// Styles
import "./Search.css";

export function Search(props: IProps) {

    const { onHandleChange } = props;

    return (
        <div className="search">
            <div className="search-inner">
                <input
                    onChange={onHandleChange}
                    className="search__input"
                    placeholder="Поиск..."
                    type="text"
                />
            </div>
        </div>
    );
};