import * as React from 'react';
import { GRID_WIDTH, GRID_HEIGHT } from './App';

export interface ViewTemplatesProps {
  template: { name: String; grid: Number[][]; },
  loadTemplate: Function;
}
 
const ViewTemplates: React.SFC<ViewTemplatesProps> = (props) => {
  return (  
    <div className="view-template"
      onClick={() => {
        props.loadTemplate(props.template.grid)
      }}
    >
      <div className="view-template-label">
        { props.template.name }
      </div>

      <div className="view-template-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${props.template.grid[0].length}, ${GRID_WIDTH}px)`
        }}>
          {props.template.grid.map((rows, y) =>
          rows.map((col, x) =>
          <div key={`${props.template.name}-${y}-${x}`} style={{
            width: GRID_WIDTH,
            height: GRID_HEIGHT,
            backgroundColor: props.template.grid[y][x] ? 'pink' : undefined,
            border: 'solid 1px #454545'
          }} />
          ))}

      </div>
    </div>
  );
}
 
export default ViewTemplates;