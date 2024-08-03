import styled from 'styled-components';

import PanelForm from '@components/panelForm/PanelForm';
import MapLeaflet from '@/components/mapLeaflet/mapLeaflet';

const Calculator: React.FC = () => {
    return (
        <CalculatorWrapper>
            <PanelForm />
            <MapLeaflet />
        </CalculatorWrapper>
    )
}

const CalculatorWrapper = styled.main`
    position: relative;
`

export default Calculator;
