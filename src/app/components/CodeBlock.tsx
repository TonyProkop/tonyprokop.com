import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import rosePinePrism from '@/rose-pine-prism'

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);

export enum Language {
  JAVASCRIPT = 'javascript',
  JSX = 'jsx',
}

type CodeBlockProps = {
  code: string;
  language: Language;
}

const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={rosePinePrism} wrapLines lineProps={(lineNumber) => {
      const style: any = { display: "block", width: "fit-content" };
      console.log(lineNumber);
      if (lineNumber == 2) {
        style.backgroundColor = "red";
      }
      return { style };
    }}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
