import React, { useState, useEffect } from "react"
import { NumberInputProps } from "@/types"

import { InputWrapper, Label, Input, InputError } from '../globalFormStyles';

const NumberInput: React.FC<NumberInputProps> = ({
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
    const [inputData, setInputData] = useState<string>(modelValue.toString());
    const [errorText, setErrorText] = useState<string | null>(null);

    useEffect(() => {
        setInputData(modelValue !== undefined && modelValue !== null ? modelValue.toString() : '');
    }, [modelValue]);

    useEffect(() => {
        if (clear) {
            clearField();
        }
    }, [clear]);

    useEffect(() => {
        if (checkIsValid) {
            validateData(inputData === '' ? undefined : parseFloat(inputData));
        }
    }, [checkIsValid, inputData]);

    const clearField = () => {
        setInputData('');
        setErrorText(null);
        if (onUpdateModelValue) onUpdateModelValue(0);
        if (onInput) onInput(0); 
        if (onBlur) onBlur(0); 
    };

    const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (!/^\d*\.?\d*$/.test(value)) return;

        const numericValue = value === '' ? 0 : parseFloat(value);

        setInputData(value);
        if (onBlur) onBlur(numericValue);
        validateData(numericValue);
    };

    const eventBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        const numericValue = value === '' ? 0 : parseFloat(value);

        setInputData(value);
        if (onBlur) onBlur(numericValue);
        validateData(numericValue);
    };

    const validateData = (v?: number) => {
        if (rules && rules.length) {
            const errTxt = rules.map(f => f(v ?? 0)).find(itm => itm !== true);
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
        <InputWrapper className="input-box number-input">
            <Input
                className={errorText ? 'valid-err' : ''}
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
    )
}

export default NumberInput;