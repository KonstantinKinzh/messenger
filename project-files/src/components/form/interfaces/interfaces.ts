// Интерфейс для пропсов компонента DynamicForm
export interface IDynamicFormProps {
    header: string,
    inputs: IInputs[];
    nameBtn: string;
    onSubmit: (states: Record<string, any>, navigate: (path: string) => void) => void;
    
};

// Интерфейс для описания полей формы
export interface IInputs {
    name: string;
    type: string;
    placeholder: string;
    nameState: string;
};