import Components from "./index";
import SbEditable from "storyblok-react";

const Page = (props) => (
  <SbEditable content={props.content}>
    <div>{props.content.body.map((blok) => Components(blok))}</div>
  </SbEditable>
);
export default Page;
