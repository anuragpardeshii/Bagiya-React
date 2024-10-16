import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { label: 'Failure', value: 3, color: "#EE4B2B" },
  { label: 'Success', value: 10, color: "#83cc14" },
];

// Size of the chart
const size = {
  width: 340,
  height: 200,
};

// Styled text for the center label
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
  // Calculate total attempts
  const totalAttempts = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <>
    <h4 className="border-bottom text-center p-3 fw-semibold" style={{color: "#85ce14"}}>Success Rate</h4>
    <div className='mt-5 d-flex flex-column align-items-center'>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Attempts: <br /> {totalAttempts}</PieCenterLabel>
      </PieChart>
    </div>
    </>
  );
}
