import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
`;

export const Label = styled.label`
    position: absolute;
    display: block;
    z-index: 2;
    left: 20px;
    top: 12px;
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    color: #c2c2c2;
    line-height: 1.3;
    transform-origin: top left;
    transition: transform 200ms ease-out, color 200ms ease-out, font-size 200ms ease-out;
    pointer-events: none;

    @media (max-width: 1180px) {
        top: 8px;
    }
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 44px;
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    line-height: 1;
    text-align: left;
    color: #191919;
    background-color: #ffffff;
    border: 1px solid #99B2C5;
    border-radius: 4px;
    padding: 0 20px;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
        color: transparent; /* Hide placeholder */
    }

    &:focus + ${Label},
    &:not(:placeholder-shown) + ${Label} {
        color: #7899b3;
        font-size: 14px;
        transform: translate(-20px, -34px);
    }

    @media (max-width: 1180px) {
       height: 36px;

       &:focus + ${Label},
       &:not(:placeholder-shown) + ${Label} {
        display:none;
       }
    }
`;

export const InputError = styled.span`
    position: absolute;
    z-index: 2;

    right: 0px;
    font-family: "Barlow", sans-serif;
    font-size: 11px;
    line-height: 1;
    color: red;
    font-weight: 500;
    font-style: italic;

    cursor: default;
    pointer-events: none;
`