import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SectionSeparator from "./section-separator";
import Button from "./button";

export default function ComponentBody({ content, code }) {
  const handleCopyClick = () => {
    // Create a textarea element to store the code
    const textarea = document.createElement("textarea");
    textarea.value = content.code;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  };

  return (
    <div className={`max-w-2xl mx-auto flex flex-col gap-8`}>
      {code ? (
        <>
          <Button text="Copy" onClick={handleCopyClick} />
          <SyntaxHighlighter language="jsx" style={coy}>
            {content.code}
          </SyntaxHighlighter>
        </>
      ) : (
        <>
          <p>{content}</p>
          <SectionSeparator mini />
        </>
      )}
    </div>
  );
}
