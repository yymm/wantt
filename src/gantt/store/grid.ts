export type ScaleType = 'day' | 'week' | 'month' | 'year'; // just idea

export type GridRange = {
  start: Date;
  end: Date;
};

export type Grid = {
  scaleType: ScaleType; // just idea
  range: GridRange;
};

export function InitialRange(now: Date) {
const start = new Date();
const end= new Date();
return {
scaleType: 'day',
{
start: start,
end: end,
}
}
}
