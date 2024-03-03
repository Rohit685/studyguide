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
const project = `string name = "John Doe";
int age = 13;
double balance = 500.00;`

export default function Home() {
    return (
        <>
            <Head>
                <title>Variables & Data Types</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <div className={"container"}>
                            <div className={"left"}>
                                <h3>Variables</h3>
                                <p className={"p"}>In computer programming, a variable is a named storage location in a program's memory where data can be stored, retrieved, and manipulated. 
                                    Variables are fundamental to programming and are used to hold and manage data of various types, such as numbers, text, and more complex structures.
                                    To declare variables, you have to specify a data type -&gt;
                                </p>
                                <SyntaxHighlighter language="csharp" style={nightOwl}  code={"string message;"} useInlineStyles ={true}/>
                                <p className={"p"}>With the code above, the variable is set to null which basically means the absence of value. <b>Null</b> is 
                                used when a variable does not hold a value. It also is one of the most annoying errors for beginners.
                                </p>
                                <SyntaxHighlighter language="csharp" style={nightOwl} code={"string message = \"Hello World\";"} useInlineStyles = {true}/>
                                <p className={"p"}>Now the variable <b>message</b> is set to the value of <b>Hello World</b></p>
                            </div>
                            <div className={"right"}>
                                <h3>Data Types</h3>
                                <p className={"p"}>In C#, data types are used to define the type and size of data that a
                                    variable can hold.
                                    C# is a statically typed language, which means that you must declare the data type
                                    of a variable before using it.
                                    Here are some of the common data types in C#.
                                </p>
                                <div className="space-y-2 bg-gray-700 rounded-2xl p-3">
                                    <h3 className={"text-xl text-left"}>Numeric Types</h3>
                                    <div className="flex flex-col space-y-1 ml-3">
                                        <li>int: A number without decimals.</li>
                                        <li>float: A number with 7 decimal digits of precision.</li>
                                        <li>double: A number with 15 decimal digits of precision</li>
                                    </div>
                                </div>
                                <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3">
                                    <h3 className={"text-xl text-left"}>Boolean Types</h3>
                                    <div className="flex flex-col space-y-1 ml-3">
                                        <li>bool: True/False value</li>
                                    </div>
                                </div>
                                <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3">
                                    <h3 className={"text-xl text-left"}>Reference Types</h3>
                                    <div className="flex flex-col space-y-1 ml-3">
                                        <li>Class</li>
                                        <li>Array</li>
                                        <li>String: Alphanumeric sequence of characters.</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card"}>
                        <h3>Starting our Project: Bank Simulation</h3>
                        <p className={"p"}>To start off with this project, I will start by making some variables.
                            For a bank account, we need the account holder's name, their age, and the starting
                            balance of their account. Let me do that in C#.</p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={project} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Variables and Data Types"}/>
                </div>
        </>
    )
}