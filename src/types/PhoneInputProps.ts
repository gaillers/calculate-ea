export interface PhoneInputProps {
    modalValue?: string;
    placeholder?: string;
    inputId?: string | null;
    label?: string | null;
    icon?: string;
    clear?: boolean;
    disabled?: boolean;
    checkIsValid?: boolean;
    minLength?: number | null;
    maxLength?: number | null;
    rules?: Array<(value: string) => true | string>;
    onUpdateModelValue?: (value: string) => void;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
    onError?: (hasError: boolean) => void;
}
