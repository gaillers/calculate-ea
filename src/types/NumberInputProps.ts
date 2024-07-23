export interface NumberInputProps {
    modelValue?: string | number | undefined;
    placeholder?: string;
    inputId?: string | null;
    label?: string | null;
    clear?: boolean;
    disabled?: boolean;
    checkIsValid?: boolean;
    minLength?: number | null;
    maxLength?: number | null;
    required?: boolean | string | number;
    rules?: Array<(value: number) => true | string>;
    onUpdateModelValue: (value: number) => void;
    onInput: (value: number) => void;
    onBlur: (value: number) => void;
    onError: (hasError: boolean) => void;
}
