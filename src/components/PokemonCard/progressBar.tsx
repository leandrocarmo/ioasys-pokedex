import styled from 'styled-components';
import { lighten } from 'polished';

type ProgressBarProps = {
  percentage: number;
  fillColor: string;
  bgColor: string;
};

type ProgressBarContainerProps = {
  bgColor: string;
};

type ProgressBarFillProps = {
  percentage: number;
  fillColor: string;
};


const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  background-color: ${props => lighten(0.2, props.bgColor)};
  width: 100%;
  height: 6px;
  max-width: 249px;
  border-radius: 10px;
`;

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  background-color: ${props => props.fillColor};
  width: ${props => props.percentage / 2}%;
  height: 100%;
  border-radius: 10px;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, fillColor, bgColor }) => (
  <ProgressBarContainer bgColor={bgColor}>
    <ProgressBarFill percentage={percentage} fillColor={fillColor} />
  </ProgressBarContainer>
);

export default ProgressBar;
