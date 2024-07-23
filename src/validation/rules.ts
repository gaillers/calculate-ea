type ValidationRule<T> = (value: T) => true | any;

interface ValidationRules {
    text: ValidationRule<string>[];
    textarea: ValidationRule<string>[];
    numbers: ValidationRule<number>[];
    textOnlyLetters: ValidationRule<string>[];
    requiredText: ValidationRule<string>[];
    companyName: ValidationRule<string>[];
    longText: ValidationRule<string>[];
    longRequiredText: ValidationRule<string>[];
    login: ValidationRule<string>[];
    password: ValidationRule<string>[];
    email: ValidationRule<string>[];
    requiredEmail: ValidationRule<string>[];
    url: ValidationRule<string>[];
    phone: ValidationRule<any>[];
}

const requiredValidate: ValidationRule<string> = (v) => !!v || 'Required field';
const latinValidate: ValidationRule<string> = (v) => !!v && /^[a-z.]+$/.test(v) || 'Requires Latin without symbols, spaces and numbers, only lowercase';
const textValidate: ValidationRule<string> = (v) => !!v && /^[a-zA-Z0-9а-яА-ЯёЁ\s\.\,\!\?\-\:\r\n]+$/ig.test(v) || 'The text should not contain characters';
const textValidateNumbers: ValidationRule<number> = (v) => !isNaN(v) || 'The value should be a number';
const textNoRequiredValidate: ValidationRule<string> = (v) => !v || /^[a-zA-Z0-9а-яА-ЯёЁ\s\.\,\!\?\-\:\r\n]+$/ig.test(v) || 'The text should not contain characters';
const textOnlyLettersValidate: ValidationRule<string> = (v) => !v || /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/g.test(v) || 'The text should contain only letters';
const passwordValidate: ValidationRule<string> = (v) => !!v && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(v) || 'Required without spaces Latin, uppercase and lowercase letters and numbers';
const emailValidate: ValidationRule<string> = (v) => !!v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'Error found in E-mail';
const emailNoRequiredValidate: ValidationRule<string> = (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'Error found in E-mail';

const moreThenValidate = (cnt: number): ValidationRule<string> => (v) => !!v && v.length > cnt || 'More than ' + cnt + ' characters required';
const moreThenNoRequiredValidate = (cnt: number): ValidationRule<string> => (v) => !v || v.length > cnt || 'More than ' + cnt + ' characters required';
const lessThenValidate = (cnt: number): ValidationRule<string> => (v) => !!v && v.length < cnt || 'Less than ' + cnt + ' characters required';
const lessThenNoRequiredValidate = (cnt: number): ValidationRule<string> => (v) => !v || v.length < cnt || 'Less than ' + cnt + ' characters required';

const phoneValidate = (cnt: number): ValidationRule<string> => (v: string) => {
    const cleaned = v.replace(/\D/g, '');
    if (cleaned.length === 0) return true;
    return cleaned.length >= cnt || `Phone number entered is not correct`;
};

const phoneValidateDigits = (cnt: number): ValidationRule<string> => (v: string) => {
    const cleaned = v.replace(/\D/g, '');
    const isValidLength = cleaned.length >= cnt;
    const isValidFormat = /^\d{10,14}$/.test(cleaned);
    if (cleaned.length === 0) return true;
    return isValidLength && isValidFormat || `Please enter a valid phone number with at least ${cnt} digits`;
};

const rules: ValidationRules = {
    text: [
        moreThenNoRequiredValidate(2),
        lessThenNoRequiredValidate(48),
        textNoRequiredValidate
    ],
    textarea: [
        moreThenNoRequiredValidate(2),
        lessThenNoRequiredValidate(240),
        textValidate,
        textNoRequiredValidate
    ],
    numbers: [
        textValidateNumbers,
    ],
    textOnlyLetters: [
        requiredValidate,
        moreThenValidate(2),
        lessThenValidate(48),
        textValidate,
        textOnlyLettersValidate,
        textNoRequiredValidate
    ],
    requiredText: [
        requiredValidate,
        moreThenValidate(2),
        lessThenValidate(48),
        textValidate
    ],
    companyName: [
        requiredValidate,
        moreThenValidate(2),
        lessThenValidate(60),
    ],
    longText: [
        moreThenNoRequiredValidate(4),
        lessThenNoRequiredValidate(160),
        textNoRequiredValidate
    ],
    longRequiredText: [
        requiredValidate,
        moreThenValidate(4),
        lessThenValidate(160),
        textValidate
    ],
    login: [
        requiredValidate,
        moreThenValidate(3),
        lessThenValidate(48),
        latinValidate
    ],
    password: [
        requiredValidate,
        moreThenValidate(8),
        lessThenValidate(25),
        passwordValidate,
    ],
    email: [
        moreThenNoRequiredValidate(5),
        lessThenNoRequiredValidate(48),
        emailNoRequiredValidate
    ],
    requiredEmail: [
        requiredValidate,
        moreThenValidate(5),
        lessThenValidate(48),
        emailValidate
    ],
    url: [
        (v) => !v || /^(https?\:\/\/|\/\/)(www\.)?([a-z0-9\.\-]+)\.([a-z]{2,4})+([a-z0-9%\/.-_?&=\[\]#:]+)?$/i.test(v) || 'Error in URL'
    ],
    phone: [
        phoneValidate(10),
        phoneValidateDigits(10),
    ],
};

export default rules;
