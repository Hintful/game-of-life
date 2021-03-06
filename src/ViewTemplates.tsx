import * as React from 'react';
import ReactGA from 'react-ga';

const PREVIEW_GRID_WIDTH = 10;
const PREVIEW_GRID_HEIGHT = 10;

export interface ViewTemplatesProps {
  template: { name: String; grid: Number[][]; },
  loadTemplate: Function;
}
 
const ViewTemplates: React.SFC<ViewTemplatesProps> = (props) => {
  return (  
    <div className="view-template"
      onClick={() => {
        ReactGA.event({
          category: 'Game of Life',
          action: `User Clicked ${props.template.name} Template`
        });
        props.loadTemplate(props.template.grid)
      }}
    >
      <div className="view-template-label">
        { props.template.name }
      </div>
      <hr />
      <div className="view-template-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${props.template.grid[0].length}, ${PREVIEW_GRID_WIDTH}px)`
        }}>
          {props.template.grid.map((rows, y) =>
          rows.map((col, x) =>
          <div key={`${props.template.name}-${y}-${x}`} style={{
            width: PREVIEW_GRID_WIDTH,
            height: PREVIEW_GRID_HEIGHT,
            backgroundColor: props.template.grid[y][x] ? 'pink' : undefined,
            border: 'solid 1px #454545'
          }} />
          ))}

      </div>
    </div>
  );
}
 
export default ViewTemplates;