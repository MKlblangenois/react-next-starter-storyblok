import Components from "./index";
import SbEditable from "storyblok-react";

const Teaser = (props) => (
  <SbEditable content={props.content}>
    <div className="teaser">{props.content.headline}</div>
  </SbEditable>
);

export default Teaser;
