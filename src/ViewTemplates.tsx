import * as React from 'react';

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
      { props.template.name }
    </div>
  );
}
 
export default ViewTemplates;