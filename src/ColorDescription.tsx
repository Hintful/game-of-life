import * as React from 'react';

const GRID_SIZE = 12;

export interface ColorDescriptionProps {
  gridColors: (String | undefined)[]
}

const ColorDescription: React.SFC<ColorDescriptionProps> = (props) => {
  return (
    <div className="color-description-container">
      <div className="color-description">
        {props.gridColors.map(gridColor => (
          <div className="color-grid" style={{
            width: GRID_SIZE,
            height: GRID_SIZE,
            border: "1px solid rgba(0,0,0,0)",
            background: `${gridColor}`
          }}>
          </div>
        ))}
      </div>
      <div className="color-description-label">
        Cells change colors as they survive for more number of iterations
      </div>
    </div>

  );
}

export default ColorDescription;