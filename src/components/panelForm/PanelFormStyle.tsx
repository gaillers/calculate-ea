import styled from "styled-components";

export const PanelFormWrapper = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1180px) {
        padding: 24px;
    }

    @media (max-width: 640px) {
        padding: 16px;
    }
` 