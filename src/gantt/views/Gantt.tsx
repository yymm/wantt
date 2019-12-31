import React from 'react';
import SvgBar from '../components/SvgBar';
import SvgGrid from '../components/SvgGrid';

type GanttState = {
  start: number;
  end: number;
  color: string;
  width: number;
};

type Props = {
  width: number;
  height: number;
};

const Gantt: React.FC<Props> = (props: Props) => {
  const { width, height } = props;
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      id="gantt"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox={viewBox}>
      <SvgBar start={10} end={50} />
      <SvgBar start={70} end={120} />
      <SvgGrid></SvgGrid>
    </svg>
  );
};

export default Gantt;
