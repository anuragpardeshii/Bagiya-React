import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { colors } from '@mui/material';

const data = [
    { label: 'Study', value: 40, color: "#83cc14"},
    { label: 'Games', value: 20, color: "#bce029"},
    { label: 'Movies', value: 25, color: "#ffed4d" },
    { label: 'Books', value: 15, color: "#ffb84d" },
];

const size = {
  width: 340,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div className='mt-5 d-flex'>
    <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
      <PieCenterLabel>Tags</PieCenterLabel>
    </PieChart>
    </div>
  );
}
