import { useEffect, useState } from 'react';
import { TextInput } from '@components/ui';
import { rules } from '@/validation';

import { PanelFormWrapper } from './PanelFormStyle'

const PanelForm: React.FC = () => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setValue(value);
    }, [value]);

    const handleUpdateModelValue = (newValue: string) => {
        setValue(newValue);
    };

    const handleInput = (newValue: string) => {
        // You mentioned wanting to remove console logs, so ensure this is intentional
    };

    const handleBlur = (newValue: string) => {
        // You mentioned wanting to remove console logs, so ensure this is intentional
    };

    const handleError = (hasError: boolean) => {
        setIsValid(!hasError);
    };

    return (
        <PanelFormWrapper>
            <TextInput
                modelValue={value}
                placeholder=""
                label="Name"
                clear={false}
                disabled={false}
                checkIsValid={true}
                required={true}
                rules={rules.text}
                onUpdateModelValue={handleUpdateModelValue}
                onInput={handleInput}
                onBlur={handleBlur}
                onError={handleError}
            />
        </PanelFormWrapper>
    )
}

export default PanelForm;
