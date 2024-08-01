// Интерфейс для пропсов компонента DynamicForm
export interface IDynamicFormProps {
    header: string,
    inputs: IInputs[];
    // Функция обработки данных формы
    onSubmit: (states: Record<string, any>, navigate: (path: string) => void) => void;
    nameBtn: string;
};

// Интерфейс для описания полей формы
export interface IInputs {
    name: string;
    type: string;
    placeholder: string;
    nameState: string;
};