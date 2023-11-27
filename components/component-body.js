import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Import the CommonJS version

export default function ComponentBody({ content }) {
  console.log(content);
  return (
    <div className={`max-w-2xl mx-auto`}>
      <SyntaxHighlighter language="jsx" style={coy}>
        {content.code}
      </SyntaxHighlighter>
    </div>
  );
}
