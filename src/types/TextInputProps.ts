export interface TextInputProps {
    modelValue?: string;
    placeholder?: string;
    inputId?: string | null;
    label?: string | null;
    clear?: boolean;
    disabled?: boolean;
    checkIsValid?: boolean | number;
    minLength?: number | null;
    maxLength?: number | null;
    required?: boolean | string | number;
    rules?: Array<(value: string) => true | string>;
    onUpdateModelValue: (value: string) => void;
    onInput: (value: string) => void;
    onBlur: (value: string) => void;
    onError: (hasError: boolean) => void;
}
