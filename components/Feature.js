import SbEditable from "storyblok-react";

const Feature = (props) => (
  <SbEditable content={props.content}>
    <div className="column feature">{props.content.name}</div>
  </SbEditable>
);

export default Feature;
