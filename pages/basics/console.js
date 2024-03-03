import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const writeline = `Console.WriteLine("Hello, World!");`
const write = `Console.Write("Hello, World!");`
const input = `Console.Write("What is your name: ");
string name = Console.ReadLine();`
const output1 = `What is your name: `
const output2 = `What is your name: Rohit`

const writeNum = `int num = 5;
Console.WriteLine(num);`
export default function Home() {
    return (
        <>
            <Head>
                <title>Console Functions</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                            <h3>What is the console?</h3>
                            <p>In C#, the console refers to the standard input and output streams of a command-line interface or a terminal window. 
                                The console provides a way to interact with the user and display information directly in text form. 
                                It's commonly used for debugging, logging, and simple text-based user interfaces.
                            </p>
                    </div>
                    <div className={"card"}>
                            <h3>Different ways to write to the console</h3>
                            <p>In order to write a line of text to the console, this line of code is used: </p>
                            <SyntaxHighlighter language="csharp" style={nightOwl}  code={writeline} useInlineStyles ={true}/>
                            <p>The output would actually be: </p>
                            <SyntaxHighlighter style={nightOwl} code={`Hello, World!
                            `}/>
                            <p>As you can see, there is a new line created. <b>WriteLine</b> appends a new line to the end of whatever text you are printing to the console. In order to prevent a new line from being created, 
                                you can use <b>Write.</b></p>
                            <SyntaxHighlighter language="csharp" style={nightOwl}  code={write} useInlineStyles ={true}/>
                            <p>The output would be: </p>
                            <SyntaxHighlighter style={nightOwl} code={`Hello, World!`}/>
                            <p>As you can see, there is no new line appended. Forewarning, if you do try this out in your own program, you won't see the new line. However, 
                            you can see the difference if you run these two code blocks.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl}  code={write + '\n' + writeline} useInlineStyles ={true}/>
                            <SyntaxHighlighter language="csharp" style={nightOwl}  code={writeline + '\n' + write} useInlineStyles ={true}/>
                        
                    </div>
                    
                    <div className={"card"}>
                            <h3>User Input</h3>
                            <p>There are two main ways of getting user input.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl} code={'Console.ReadKey()' + '\n' + 'Console.ReadLine()'} useInlineStyles={true}/>
                            <p><b>ReadKey</b> is used to detect user keyboard input. <b>ReadLine</b> is used to return whatever the user typed in. For example: </p>
                            <SyntaxHighlighter language={"csharp"} style={nightOwl} code={input} useInlineStyles={true}/>
                            <p>The console would return.</p>
                            <SyntaxHighlighter style={nightOwl} code={output1} useInlineStyles={true}/>
                            <p>I would type in my name and it would look something like this.</p>
                            <SyntaxHighlighter style={nightOwl} code={output2} useInlineStyles={true}/>
                            <p>And now the <b>name</b> variable has the value of: Rohit</p>
                            <p>We will implement user input in our bank account simulation in the next section!</p>
                    </div>
                    <NextSection currentArticle={"Console Functions"}/>
                </div>
        </>
    )
}