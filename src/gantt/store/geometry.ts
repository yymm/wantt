/*
 * Geometry: handling geometrical transformation between svg coordinate system and datetime coordinate system

                   origin
0px      50px       100px      150px
          ↓          ↓          ↓

          |          |          |
          |          |          |
 ← 50px → | ← 50px → | ← 50px → |
          |          |          |
          |          |          |

      2019-12-17 2019-12-18 2019-12-19
 */

export type 

export type Geometry = {
  origin: Date;
  gap: number;
  scale: number;
};

function datetime2svg(datetime: Date) {}
