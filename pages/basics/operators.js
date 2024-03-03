import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";



const aOperators  = `int a = 2;
int b = 3;
int sum = a + b; // returns 5
int difference = a - b; // returns -1
int product = a * b; // returns 6
int quotient = a / b; // returns 0 because quotient is an int. C# ALWAYS rounds down.
int remainder = a % b; // returns 2`
const cOperators  = `int a = 2;
int b = 2;
bool equals = a == b;  // returns true
bool notequals = a != b; // returns false 
// we are using == instead of .Equals() because int is primitive.
bool lessThan = a < b;  // returns false
bool lessThanOrEqual = a <= b;  // returns true`

const lOperators  = `int a = 2;
int b = 2;
bool doubleEquals = (a == b) && (b == 2);  // returns true
doubleEquals = (a == b) && (b == 3);  // returns false because both 
//conditions in parentheses are not true
bool oneIsEqual = (a == b) || (b == 3);  // returns true because 
//one of the conditions in parentheses is true
bool not = !(a == b);  // returns false because the NOT operator 
//takes the opposite of (a==b) --> true. 
// The opposite of true is false.`

const asOperators  = `int sum = 2;
int sum = sum + 2;
int sum += 2;
// the last two lines of code accomplish the same task. 
//The latter looks cleaner which is why most people prefer to use that way 
sum =+ 2; // this will NOT work.`

const methods =  `static double DepositBalance(double balance, double additionalBalance)
{
    return balance + additionalBalance;
}

static double WithdrawBalance(double balance, double balanceToSubtract)
{
    return balance - balanceToSubtract;
}`

const project = `internal class Program
{
    static void Main(string[] args)
    {
        string name = "John Doe";
        int age = 13;
        double balance = 500.00;
        balance = DepositBalance(balance, 250);
        Console.WriteLine(balance); 
    }
    
    static double DepositBalance(double balance, double additionalBalance)
    {
        return balance + additionalBalance;
    }
    
    static double WithdrawBalance(double balance, double balanceToSubtract)
    {
        return balance - balanceToSubtract;
    }
}`
export default function Home() {
    return (
        <>
            <Head>
                <title>Operators</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
                <div>
                    <div className={"card"}>
                        <h3>Operators</h3>
                        <p>In C#, operators are special symbols or keywords that perform operations on one or more
                            operands.
                            C# provides a wide range of operators for performing various tasks, including mathematical
                            calculations, logical operations, and more. </p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-1/4">
                            <h3 className={"text-xl text-left"}>Arithmetic Operators</h3>
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>+ -&gt; Addition</li>
                                <li>- -&gt; Subtraction</li>
                                <li>/ -&gt; Division</li>
                                <li>* -&gt; Multiplication</li>
                                <li>% -&gt; Modulus - Gets the remainder</li>
                            </div>
                        </div>
                        <SyntaxHighlighter language="csharp" code={aOperators} style={nightOwl} useInlineStyles={true}/>
                        <p>For any of the arithmetic operators, if an equal sign is added on to the original sign, it
                            will assign the result of the operation to the variable.
                            For example..</p>
                        <SyntaxHighlighter language="csharp" code={asOperators} style={nightOwl}
                                           useInlineStyles={true}/>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-3/4">
                            <h3 className={"text-xl text-left"}>Comparison Operators</h3>
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>== -&gt; Equal To</li>
                                <li>!= -&gt; <b>Not</b> Equal To</li>
                                <p className={"text-base pl-0"}>When comparing objects(such as strings and other custom classes) you use the
                                    method <b>.Equals()</b>. Using == may give inaccurate results. We will talk more
                                    about
                                    this when we get into Object-Oriented Programming.</p>
                                <li> &#60; -&gt; Less than</li>
                                <li> &#60;= -&gt; Less than or equal to</li>
                                <li>Same idea for greater than and greater than or equal to: &#62; &#62;=</li>
                                <li>Doing &#62;= or flip flopping the &#61; and &#62; is perfectly fine</li>
                            </div>
                        </div>
                        <SyntaxHighlighter language="csharp" code={cOperators} style={nightOwl} useInlineStyles={true}/>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-1/3">
                            <h3 className={"text-xl text-left"}>Logical Operators</h3>
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>! -&gt; Not</li>
                                <li>&& -&gt; And - Both conditions have to be true in order</li>
                                <li>|| -&gt; Or - Only one of the conditions has to be true</li>
                            </div>
                        </div>
                        <SyntaxHighlighter language="csharp" code={lOperators} style={nightOwl} useInlineStyles={true}/>
                    </div>
                    <div className={"card"}>
                        <h3>Adding functionality to our bank account</h3>
                        <p>With a bank account, there are two main actions that you can do. Depositing and withdrawing.
                            Right now, I will add two methods in order to simulate depositing and withdrawing money.
                        </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={methods} useInlineStyles={true}/>
                        <p>
                        Below the main method, I have created two new methods DepositBalance and WithdrawBalance. 
                            As you can see, their purpose is very simple; adding and subtracting balance.  
                        </p>
                        <p>All the code: </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={project} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Operators"}/>
                </div>
        </>
    )
}