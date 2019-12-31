import React from 'react';

type Props = {
  x: number;
  y?: number;
};

const SvgTick = (props: Props) => {
  const translate = `translate(${props.x}, 100)`;
  return (
    <g className="tick" transform={translate}>
      <line stroke="#eee" y2="-100"></line>
      <text
        fill="#eee"
        y="3"
        dy="1em"
        style={{ textAnchor: 'middle' }}
        stroke="none"
        fontSize="10">
        2011-01-01
      </text>
    </g>
  );
};

const SvgGrid = () => {
  return (
    <g className="grid">
      <SvgTick x={100}></SvgTick>
      <SvgTick x={200}></SvgTick>
      <SvgTick x={300}></SvgTick>
    </g>
  );
};

export default SvgGrid;
