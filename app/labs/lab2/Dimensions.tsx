export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
          This sentence is intentionally long so you can see the box stays 120×60 regardless of content overflow.
        </div>
        <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-white">
          Wide — same size whether text is short or very long indeed
        </div>
      </div>
    </div>
  );
}
