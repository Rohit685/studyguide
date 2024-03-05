import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const QuizQuestion = ({ question, qCode, aCode, explanation }) => {
  const [show, setShow] = useState(false);

  const toggleAnswer = () => {
    setShow(!show);
  };

  return (
      <div>
        <div className={`card outline-0 py-0 px-0 gap-2 my-0`}>
            <p className={`my-1`}>Putting it all together: {question}</p>
            {qCode != null && <SyntaxHighlighter language="csharp" code={qCode} style={nightOwl} useInlineStyles={true}/> }
            <button className={"bg-blue-500 hover:bg-blue-700 text-white p-3 h-fit rounded-2xl max-xs:my-1"} onClick={toggleAnswer}>Toggle Answer</button>
        </div>
        {show && 
            <div className={`card outline-0 p-0 items-center`}>
                { aCode != null && <SyntaxHighlighter language="csharp" code={aCode} style={nightOwl} useInlineStyles={true}/> }
                <p>
                    {explanation}
                </p>
            </div>
        }
      </div>
  );
};

export default QuizQuestion;
