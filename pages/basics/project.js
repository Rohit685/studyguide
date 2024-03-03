import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const sampleUseCase = `Welcome to Simple Calculator

Menu:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

Please select an operation (1-5): 1
Enter the first number: 5
Enter the second number: 3
Result: 5 + 3 = 8

Perform another calculation? (Y/N): Y

Menu:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

Please select an operation (1-5): 4
Enter the first number: 10
Enter the second number: 0
Error: Division by zero is not allowed.

Perform another calculation? (Y/N): N

Goodbye!`
export default function Home() {
    return (
        <>
            <Head>
                <title>Mini Project #1</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className={"card"}>
                    <h3>Mini Project #1 - Simple Calculator</h3>
                    <p>You have now learned most of the C# basics. It is time to apply this theory into an actual project. 
                        Create a simple command-line calculator that allows users to perform basic arithmetic operations (addition, subtraction, multiplication, and division) 
                        on two numbers. </p>
                    <p>Key Features</p>
                     <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-3/4">
                        <div className="flex flex-col space-y-1 ml-3">
                            <li>Display a menu for the user to select an operation (e.g., addition, subtraction, multiplication, division).</li>
                            <li>Prompt the user to enter two numbers.</li>
                            <li>Perform the selected operation on the numbers.</li>
                            <li>Display the result to the user.</li>
                            <li>Ask the user if they want to perform another calculation.</li>
                        </div>
                    </div>
                    <p>Here is some sample implementation of the calculator console application</p>
                    <SyntaxHighlighter style={nightOwl} useInlineStyles={true} code={sampleUseCase}/>
                    <p>I encourage you to add more to this project. There any more mathematical operations that you could add to this project.
                    Do not try and get this done as quickly as possible or google an answer. Try and learn as much as you can from it.
                    At the same time, do not get frustrated if you do not understand what to do. Make sure to ask for help and google if you get
                    really frustrated.
                    </p>
                    <p>If you completed this project with no struggle and need more of a challenge, here is some functionality you can add that is a
                    little bit more challenging. <i>I have not gone over everything in the list below</i></p>
                    <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-3/4">
                        <div className="flex flex-col space-y-1 ml-3">
                            <li>For addition and multiplication, allow the user to input as many numbers as they would
                                like.
                            </li>
                            <li>Exponents</li>
                            <li>Give the remainder of division if it's not 0</li>
                        </div>
                    </div>
                </div>
                <NextSection currentArticle={"Mini Project 1"}/>
            </div>
        </>
    )
}