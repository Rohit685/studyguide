import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const usingPlus = `string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
// returns: John Doe`

const stringip = `string firstName = "John";
string lastName = "Doe";
string fullName = $"{firstName} {lastName}";
// returns: John Doe`

const stringconcatmethod = `string firstName = "John";
string lastName = "Doe";
string fullName = string.Concat(firstName, " ", lastName);
// returns: John Doe`

const editedMethod = `static void Main(string[] args)
{
    string name = "John Doe";
    int age = 13;
    double balance = 500.00;
    balance = DepositBalance(balance, 250);
    balance = WithdrawBalance(balance, 1000);
}
`

const editedMethod2 = `static double WithdrawBalance(double balance, double balanceToSubtract)
{
    Console.WriteLine($"Withdrew {balanceToSubtract}.");
    return balance - balanceToSubtract;
}

static double DepositBalance(double balance, double additionalBalance)
{
    if (Balance - additionalBalance < 0)
    {   
        Console.WriteLine($"Funds insufficient\\nMax Funds that can be deposited: {Balance}");
        return Balance;
    }
    Console.WriteLine($"Deposited {additionalBalance}.");
    return balance + additionalBalance;
}`

export default function Home() {
    return (
        <>
            <Head>
                <title>Working with Strings</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <h3>Working with Strings</h3>
                        <p>String manipulation is very important especially in console applictions. In this section, you will learn about how to manipulate strings.</p>
                        
                        <h3>String Concatenation</h3>
                        <p>String concatenation in C# is the process of combining two or more strings to create a new string. 
                            In C#, you can concatenate strings using various techniques, each with its advantages and use cases.
                        </p>
                        <h3>Using the `+` Operator</h3>
                        <p>At the start, this method will probably make the most sense. As you get further along, you will start to realize it is very unintuitive.
                        Nonetheless, it is important to know as for some scenarios, it is the only option. Here is an example..</p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={usingPlus} useInlineStyles={true}/>
                        <h3>String Interpolation</h3>
                        <p>String interpolation is a more modern and readable way to concatenate strings in C#. 
                            It allows you to embed expressions within a string literal using the $ symbol, and the expressions are evaluated and inserted into the resulting string.
                        </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={stringip} useInlineStyles={true}/>
                        <h3>String Concat method</h3>
                        <p>I mean....sure</p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={stringconcatmethod} useInlineStyles={true}/>
                        <p>As you can see, there are a lot of ways to combine strings and add variables. It is personal preference. I prefer the middle method personally.</p>
                    </div>
                    <div className={"card"}>
                        <h3>Other methods</h3>
                        <p>C# provides a lot of methods for strings. I am not going to go in depth in all of the methods as that would take too long. I would recommend looking at this site 
                        that has most of the important methods. -&gt; <a href={"https://code-maze.com/csharp-string-methods/"}> Code Maze</a></p>
                    </div>
                    <div className={"card"}>
                        <h3>Providing more information to the user</h3>
                        <p>Let's make it where when the balance changes, we provide a better explanation of what happened.</p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={editedMethod + editedMethod2} useInlineStyles={true}/>
                        <p>
                            Using string interpolation, we can now give the users more information about what is happening when trying to deposit and withdraw money.
                            Now, it returns the below when the user tries to withdraw more than they can.
                        </p>
                        <SyntaxHighlighter  style={nightOwl} code={`Funds insufficient\nMax Funds that can be deposited: {Insert whatever the person's balance is}`} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Working with Strings"}/>
                </div>
        </>
    )
}