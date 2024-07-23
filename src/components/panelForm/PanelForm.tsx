import { useEffect, useState } from 'react';
import { TextInput, NumberInput, PhoneInput } from '@components/ui';
import { rules } from '@/validation';

import { PanelFormWrapper } from './PanelFormStyle'

const PanelForm: React.FC = () => {
    const [textValue, setTextValue] = useState('');
    const [numberValue, setNumberValue] = useState<number | string>();
    const [phoneValue, setPhoneValue] = useState<number | string>();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setTextValue(textValue);
    }, [textValue]);

    useEffect(() => {
        setNumberValue(numberValue);
    }, [numberValue]);

    useEffect(() => {
        setPhoneValue(phoneValue);
    }, [phoneValue]);


    const handleUpdateTextModelValue = (newValue: string) => {
        setTextValue(newValue);
    };

    const handleUpdateNumberModelValue = (newValue: number) => {
        setNumberValue(newValue);
    };

    const handleUpdatePhoneModelValue = (newValue: string) => {
        setPhoneValue(newValue);
    };

    const handleInput = (newValue: string | number) => {
        // Intentionally left blank
    };

    const handleBlur = (newValue: string | number) => {
        // Intentionally left blank
    };

    const handleError = (hasError: boolean) => {
        setIsValid(!hasError);
    };

    return (
        <PanelFormWrapper>
            <TextInput
                modelValue={textValue}
                placeholder=""
                label="Name"
                clear={false}
                disabled={false}
                checkIsValid={true}
                required={true}
                rules={rules.text}
                onUpdateModelValue={handleUpdateTextModelValue}
                onInput={handleInput}
                onBlur={handleBlur}
                onError={handleError}
            />
            <NumberInput
                modelValue={numberValue}
                placeholder=""
                label="Number"
                clear={false}
                disabled={false}
                checkIsValid={true}
                maxLength={6}
                rules={rules.numbers}
                onUpdateModelValue={handleUpdateNumberModelValue}
                onInput={handleInput}
                onBlur={handleBlur}
                onError={handleError}
            />

            <PhoneInput
                modalValue={''}
                placeholder=""
                label="Phone"
                clear={false}
                disabled={false}
                checkIsValid={true}
                maxLength={14}
                rules={rules.phone}
                onUpdateModelValue={handleUpdatePhoneModelValue}
                onInput={handleInput}
                onBlur={handleBlur}
                onError={handleError}
            />

        </PanelFormWrapper>
    )
}

export default PanelForm;
