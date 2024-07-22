import React, { useState, useEffect } from 'react';
import { TextInputProps } from '../../../../types';
import { InputWrapper, Label, Input, InputError } from './TextInputStyle';


const TextInput: React.FC<TextInputProps> = ({
    modelValue = '',
    placeholder = '',
    inputId = null,
    label = null,
    clear = false,
    disabled = false,
    checkIsValid = false,
    minLength = null,
    maxLength = null,
    rules = [],
    onUpdateModelValue,
    onInput,
    onBlur,
    onError,
}) => {
    const [inputData, setInputData] = useState(modelValue);
    const [errorText, setErrorText] = useState<string | null>(null);

    useEffect(() => {
        setInputData(modelValue);
    }, [modelValue]);

    useEffect(() => {
        if (clear) {
            clearField();
        }
    }, [clear]);

    useEffect(() => {
        if (checkIsValid) {
            validateData(inputData);
        }
    }, [checkIsValid]);

    const clearField = () => {
        setInputData('');
        setErrorText(null);
        onUpdateModelValue('');
        onInput?.('');
        onBlur?.('');
    };

    const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim() || '';
        setErrorText(null);
        onUpdateModelValue(value);
        onInput?.(value);
    };

    const eventBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        let value = e.target.value.trim() || '';
        value = value.replace(/\s+/g, ' ').trim();
        setInputData(value);
        onBlur?.(value);
        validateData(value);
    };

    const validateData = (v: string) => {
        if (rules && rules.length) {
            const errTxt = rules.map(f => f(v)).find(itm => itm !== true);
            if (errTxt) {
                setErrorText(errTxt as string);
                onError?.(true);
                return;
            } else {
                setErrorText(null);
                onError?.(false);
                return;
            }
        }
        onError?.(false);
    };

    return (
        <InputWrapper className="input-box text-input">
            <Input
                value={inputData}
                id={inputId || undefined}
                name={inputId || undefined}
                maxLength={maxLength !== null ? Number(maxLength) : undefined}
                minLength={minLength !== null ? Number(minLength) : undefined}
                type="text"
                required
                placeholder={placeholder}
                disabled={disabled}
                onInput={eventInput}
                onBlur={eventBlur}
            />
            {label && <Label className='input-label' htmlFor={inputId || undefined}>{label}</Label>}
            {errorText && <InputError className="input-error">{errorText}</InputError>}
        </InputWrapper>
    );
};

export default TextInput;
