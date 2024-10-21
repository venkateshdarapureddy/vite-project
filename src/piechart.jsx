import * as React from "react";
import { PieChart } from "@mui/x-charts";
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5 },
  { value: 10},
  { value: 15 },
  { value: 20 },
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 40,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
 function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
      <PieCenterLabel>$338</PieCenterLabel>
      
    </PieChart>
  );
}
export default PieChartWithCenterLabel
