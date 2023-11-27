import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Import the CommonJS version
import SectionSeparator from "./section-separator";

export default function ComponentBody({ content, code }) {
  console.log(content);
  return (
    <div className={`max-w-2xl mx-auto`}>
      {code ? (
        <SyntaxHighlighter language="jsx" style={coy}>
          {content.code}
        </SyntaxHighlighter>
      ) : (
        <>
          <p>{content}</p>
          <SectionSeparator mini />
        </>
      )}
    </div>
  );
}
