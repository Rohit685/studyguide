import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const QuizQuestion = ({ question, qCode, aCode, explanation }) => {
  const [show, setShow] = useState(false);

  const toggleAnswer = () => {
    setShow(!show);
  };

  return (
      // <div className={"collapse collapse-arrow"}>
      //     <input type={"checkbox"}/>
      //   <div className={`card outline-0 py-0 px-0`}>
      //       <p>Putting it all together: {question}</p>
      //       {qCode != null && <SyntaxHighlighter language="csharp" code={qCode} style={nightOwl} useInlineStyles={true}/> }
      //       <button className={"bg-blue-600 hover:bg-blue-700 text-white p-3 h-fit rounded-2xl w-fit"} onClick={toggleAnswer}>{show ? "Close" : "Open"} Answer</button>
      //   </div>
      //   {show && 
      //       <div className={`card rounded-xl`}>
      //           <p>
      //               {explanation}
      //           </p>
      //           { aCode != null && <SyntaxHighlighter language="csharp" code={aCode} style={nightOwl} useInlineStyles={true}/> }
      //       </div>
      //   }
      // </div>
      <div className="collapse collapse-plus quizContainerColor my-3">
          <input type="checkbox"/>
          <div className="collapse-title">
              <h5 className={"px-1"}>Click to reveal answer!</h5>
              <p>Putting it all together: {question}</p>
              {qCode != null && <SyntaxHighlighter language="csharp" code={qCode} style={nightOwl} useInlineStyles={true}/> }
          </div>
          <div className="collapse-content">
              <p>
                  {explanation}
              </p>
              { aCode != null && <SyntaxHighlighter language="csharp" code={aCode} style={nightOwl} useInlineStyles={true}/> }
          </div>
      </div>
  );
};

export default QuizQuestion;
