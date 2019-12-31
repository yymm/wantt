import React, { useState, useEffect, useCallback } from 'react';

const POSITION = { x: 0, y: 0 };

type Props = {
  start: number;
  end: number;
  width?: number;
};

type MouseDownProps = {
  clientX: number;
  clientY: number;
};

type Translation = {
  x: number;
  y: number;
};

const Bar: React.FC<Props> = (props: Props) => {
  const { start, end, width } = props;

  const realWidth = width && 20;

  const [state, setState] = useState({
    start: start,
    end: end,
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });

  const handleMouseDown = (props: MouseDownProps) => {
    const { clientX, clientY } = props;
    console.log(clientX, clientY);
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  };

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation: Translation = {
        x: clientX - state.origin.x,
        y: clientY - state.origin.y,
      };

      setState((state) => ({
        ...state,
        // start: translation.x,
        end: translation.x,
        translation,
      }));

      // onDrag(translation, id);
    },
    // [state.origin, onDrag, id],
    [],
  );

  const handleMouseUp = useCallback(
    () => {
      setState((state) => ({
        ...state,
        isDragging: false,
      }));

      // onDragEnd();
    },
    /* [onDragEnd] */ [],
  );

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setState((state) => ({ ...state, translation: { x: 0, y: 0 } }));
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <line
      x1={state.start}
      y1={realWidth}
      x2={state.end}
      y2={realWidth}
      stroke="orange"
      strokeWidth="40"
      id="line"
      pointerEvents="all"
      onMouseDown={handleMouseDown}></line>
  );
};

export default Bar;
