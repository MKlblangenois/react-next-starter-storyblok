import Components from "./index";
import SbEditable from "storyblok-react";

const Grid = (props) => (
  <SbEditable content={props.content}>
    <div className="grid">
      {props.content.columns.map((blok) => Components(blok))}
    </div>
  </SbEditable>
);

export default Grid;
