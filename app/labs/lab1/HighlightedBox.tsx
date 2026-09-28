import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong>{" "}children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="honeydew"
        borderColor="seagreen"
        borderWidth={2}
        borderRadius={8}
      >
        <h4>Sample nested content</h4>
        <ul>
          <li>p — wraps a paragraph of body text</li>
          <li>table — organizes data into rows and columns</li>
          <li>form — groups input controls for user submission</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#fff3e0"
        borderColor="darkorange"
        borderWidth={4}
        borderRadius={4}
      >
        <h4>Sarthak Sonawane</h4>
        <ul>
          <li>Build full-stack web applications using React and Next.js</li>
          <li>Understand how HTML, CSS, and JavaScript work together</li>
          <li>Build visually engaging pages with modern layouts and interactivity</li>
        </ul>
      </HighlightedBox>
    </div>
  );
}