import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        The style attribute applies inline CSS directly to a single element,
        bypassing any external stylesheet.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph has a green background and yellow foreground text,
        also styled directly with the style attribute.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel
        </p>
        <p id="wd-ai-id-selector">
          ID selectors target a single unique element, making them more
          precise than tag selectors that match every instance of a tag.
        </p>
        <p id="wd-id-selector-3">
          A third paragraph with its own teal color scheme, using a unique
          ID selector that targets only this element.
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          A class selector targets any element carrying that class name,
          regardless of tag type.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the same class as the paragraph above
        </h4>
        <p className="wd-your-class">
          A custom class can be applied to any element — here a paragraph
          shares the same crimson style as the heading below.
        </p>
        <h4 className="wd-your-class">
          This heading shares the crimson class with the paragraph above
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This span matches a descendant rule — .wd-selector-1 .wd-ai-selector-5
              </span>
              <br />
              <span className="wd-selector-5">
                This span uses a direct child selector from wd-selector-3
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-rule-mechanism">
        <h3>CSS Rule Mechanism — Specificity</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Three rules compete: p tag (green), class (yellow), id (red) — id
          is declared last yet still wins because specificity outranks source order.
        </p>
        <p id="wd-specificity-id" className="wd-specificity-class">
          Three rules compete on this paragraph: a tag rule (gray), a class
          rule (blue), and an id rule (red). The id wins.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
