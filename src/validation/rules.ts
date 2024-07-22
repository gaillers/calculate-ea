type ValidationRule = (value: string) => true | string;

interface ValidationRules {
    text: ValidationRule[];
    textarea: ValidationRule[];
    numbers: ValidationRule[];
    textOnlyLetters: ValidationRule[];
    requiredText: ValidationRule[];
    companyName: ValidationRule[];
    longText: ValidationRule[];
    longRequiredText: ValidationRule[];
    login: ValidationRule[];
    password: ValidationRule[];
    email: ValidationRule[];
    requiredEmail: ValidationRule[];
    url: ValidationRule[];
    phone: ValidationRule[];
}

const requiredValidate: ValidationRule = (v) => !!v || 'Required field';
const latinValidate: ValidationRule = (v) => !!v && /^[a-z.]+$/.test(v) || 'Requires Latin without symbols, spaces and numbers, only lowercase';
const textValidate: ValidationRule = (v) => !!v && /^[a-zA-Z0-9а-яА-ЯёЁ\s\.\,\!\?\-\:\r\n]+$/ig.test(v) || 'The text should not contain characters';
const textValidateNumbers: ValidationRule = (v) => !!v && /^\d+$/.test(v) || 'The text should contain only numbers';
const textNoRequiredValidate: ValidationRule = (v) => !v || /^[a-zA-Z0-9а-яА-ЯёЁ\s\.\,\!\?\-\:\r\n]+$/ig.test(v) || 'The text should not contain characters';
const textOnlyLettersValidate: ValidationRule = (v) => !v || /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/g.test(v) || 'The text should contain only letters';
const passwordValidate: ValidationRule = (v) => !!v && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(v) || 'Required without spaces Latin, uppercase and lowercase letters and numbers';
const emailValidate: ValidationRule = (v) => !!v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'Error found in E-mail';
const emailNoRequiredValidate: ValidationRule = (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'Error found in E-mail';

const moreThenValidate = (cnt: number): ValidationRule => (v) => !!v && v.length > cnt || 'More than ' + cnt + ' characters required';
const moreThenNoRequiredValidate = (cnt: number): ValidationRule => (v) => !v || v.length > cnt || 'More than ' + cnt + ' characters required';
const lessThenValidate = (cnt: number): ValidationRule => (v) => !!v && v.length < cnt || 'Less than ' + cnt + ' characters required';
const lessThenNoRequiredValidate = (cnt: number): ValidationRule => (v) => !v || v.length < cnt || 'Less than ' + cnt + ' characters required';
const phoneValidate = (cnt: number): ValidationRule => (v) => !!v && v.length > cnt || 'Phone number is invalid';

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
        textNoRequiredValidate
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
        requiredValidate,
        phoneValidate(13)
    ],
};

export default rules;
