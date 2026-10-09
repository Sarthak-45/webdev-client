export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid wd-padding-fat">
        Fat red solid border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed wd-padding-fat">
        Thin blue dashed border
      </p>
      <p id="wd-ai-border" className="wd-border-fat wd-border-dashed wd-border-yellow wd-padding-fat">
        Fat yellow dashed border — mixing width, style, and color classes
      </p>
      <p className="wd-border-fat wd-border-black wd-border-solid wd-padding-fat">
        Fat black solid border — my personal border style
      </p>
    </div>
  );
}
