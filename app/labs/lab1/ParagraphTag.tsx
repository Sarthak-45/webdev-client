export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Wrapping text in a paragraph tag tells the browser to treat that block
        as a distinct unit, so it automatically adds vertical margin above and
        below the content to separate it from neighboring elements.
      </p>
      <p id="wd-p-your-1">
        I am Sarthak, a Data Analytics Engineering student from India. I enjoy
        working with data and finding patterns that tell a story.
      </p>
      <p id="wd-p-your-2">
        I am excited to learn web development and hope to build cool, interactive
        pages that bring ideas to life in the browser.
      </p>
    </div>
  );
}