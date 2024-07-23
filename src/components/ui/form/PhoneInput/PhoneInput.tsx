import React, { useState, useEffect } from "react";
import { PhoneInputProps } from "@/types";

import { InputWrapper, Label, Input, InputError } from '../globalFormStyles';

const PhoneInput: React.FC<PhoneInputProps> = ({
    modalValue = '',
    placeholder = '',
    inputId = null,
    label = null,
    icon = '',
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
    const [inputData, setInputData] = useState<string>(modalValue.toString());
    const [errorText, setErrorText] = useState<string | null>(null);

    useEffect(() => {
        setInputData(modalValue.toString());
    }, [modalValue]);

    useEffect(() => {
        if (clear) {
            clearField();
        }
    }, [clear]);

    useEffect(() => {
        if (checkIsValid) {
            validateData(inputData);
        }
    }, [checkIsValid, inputData]);

    const clearField = () => {
        setInputData('');
        setErrorText(null);
        onUpdateModelValue?.('');
        onInput?.('');
        onBlur?.('');
    };

    const formatPhoneNumber = (value: any) => {
        let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? "-" + x[3] : ""}`;
        return value;
    };

    const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const formattedValue = formatPhoneNumber(rawValue);

        setInputData(formattedValue);
        onUpdateModelValue?.(formattedValue);
        onInput?.(formattedValue);
    };

    const eventBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
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
        <InputWrapper className="input-box phone-input">
            <Input
                className={errorText ? 'valid-err' : ''}
                value={inputData}
                id={inputId || undefined}
                name={inputId || undefined}
                maxLength={maxLength !== null ? Number(maxLength) : undefined}
                minLength={minLength !== null ? Number(minLength) : undefined}
                type="tel"
                placeholder={placeholder}
                disabled={disabled}
                onChange={eventInput}
                onBlur={eventBlur}
            />
            {label && <Label className='input-label' htmlFor={inputId || undefined}>{label}</Label>}
            {icon && <div className="input-icon"><img src={icon} alt="Icon" /></div>}
            {errorText && <InputError className="input-error">{errorText}</InputError>}
        </InputWrapper>
    );
};

export default PhoneInput;
