import styled from 'styled-components';
import PanelForm from '@components/panelForm/PanelForm';

const Calculator: React.FC = () => {
    return (
        <CalculatorWrapper>
            <PanelForm/>
        </CalculatorWrapper>
    )
}

const CalculatorWrapper = styled.main`
    position: relative;
`

export default Calculator;
