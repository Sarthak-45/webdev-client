import Link from "next/link";
export default function TOC() {
  return (
    <div id="wd-labs-toc">
      <p><strong>Sarthak Vikas Sonawane</strong></p>
      <p style={{ fontSize: "0.75rem" }}>Building one lab at a time.</p>
      <h5>Labs</h5>
      <ul>
        <li><Link href="/labs" id="wd-home-link">Home</Link></li>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
        <li><Link href="/" id="wd-kambaz-link">Kambaz</Link></li>
        <li><Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
      </ul>
    </div>
  );
}
