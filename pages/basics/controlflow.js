import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";
const ifstatement = `Console.Write("What is your age: ");
int age = Int32.Parse(Console.ReadLine());
if(age >= 18) {
    Console.WriteLine("You are able to vote!");
}
else {
    Console.WriteLine("You are not able to vote!");
}`

const elseif = `int score = 75;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else if (score >= 60)
{
    Console.WriteLine("Grade: D");
}
else
{
    Console.WriteLine("Grade: F");
}
`


const switchstate = `Console.WriteLine("Choose an option:");
Console.WriteLine("1. View Profile");
Console.WriteLine("2. Edit Profile");
Console.WriteLine("3. Logout");

int choice = int.Parse(Console.ReadLine());

switch (choice)
{
    case 1:
        Console.WriteLine("Viewing Profile...");
        break;
    case 2:
        Console.WriteLine("Editing Profile...");
        break;
    case 3:
        Console.WriteLine("Logging out...");
        break;
    default:
        Console.WriteLine("Invalid choice. Please select a valid option.");
        break;
}
`

const ternary = `int number = 10;
String result = (number % 2 == 0) ? "Even" : "Odd";`

const ternarytranslation = `int number = 10;
String result;
if (number % 2 == 0) {
    result = "Even";
} else {
    result = "Odd";
}`

const ternarystruct = `Condition ? executeIfConditionIsTrue : elseDoThis;`


const forStruct = `for (initialization; condition; increment) {
    // Code to be executed
}
`

const basicFor = `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
`
const forReturn =`1
2
3
4
5`

const whileStruct = `while (condition) {
    // Code to be executed
}
`

const basicWhile = `string userInput = "";
Console.WriteLine("Enter some text (type 'exit' to quit):");
while (userInput != "exit")
{
    userInput = Console.ReadLine();
    Console.WriteLine("You entered: " + userInput);
}
Console.WriteLine("You exited the program.");
`
const whileReturn =`You entered: hello
You entered: world
You entered: I love C#
You entered: I hate debugging
You entered: exit
You exited the program.`

const breakexample = `for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        Console.WriteLine("Breaking the loop at i = 5");
        break;  // This will exit the loop when i equals 5.
    }
    Console.WriteLine("i = " + i);
}`

const continueExample = `for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        Console.WriteLine("Skipping i = 5");
        continue;  // This will exit the loop when i equals 5.
    }
    Console.WriteLine("i = " + i);
}`

const breakReturn = `i = 1
i = 2
i = 3
i = 4
Breaking the loop at i = 5
`

const continueReturn = `i = 1
i = 2
i = 3
i = 4
Skipping i = 5
i = 6
i = 7
i = 8
i = 9
i = 10
`

const trycatch = `try
{
    string userInput = Console.ReadLine();
    int number = int.Parse(userInput);
    Console.WriteLine($"You entered: {number}");
}
catch (Exception)
{
    Console.WriteLine("Invalid input.");
}`

const tryreturn = `4
You entered: 4
You entered: aowrigrhawr
Invalid input.`

const newWithdrawMethod = `static double WithdrawBalance(double balance, double balanceToSubtract)
{
    if(balance - balanceToSubtract < 0)
    {
        Console.WriteLine($"Funds insufficient\nMax Funds that can be deposited: {balance}");
        return balance;
    }
    Console.WriteLine($"Withdrew {balanceToSubtract}.");
    return balance - balanceToSubtract;
}`


const mainMethod = `static void Main(string[] args)
{
    string name = "John Doe";
    int age = 13;
    double balance = 500.00;
    
    
    while (true) { 
    
        Console.Write($"Hello {name}. You currently have \${balance}. 
        If you want to deposit money, enter deposit. To withdraw, enter withdraw. 
        If you would like to leave the program, type in quit or q. ");
        
        
        var input = Console.ReadLine();
        if (input.ToLower().Equals("deposit"))
        {
            Console.Write("How much money would you like to deposit?: ");
            var num = Convert.ToInt32(Console.ReadLine());
            balance = DepositBalance(balance, num);
        }
        else if (input.ToLower().Equals("withdraw"))
        {
            Console.Write("How much money would you like to withdraw?: ");
            var num = Convert.ToInt32(Console.ReadLine());
            balance = WithdrawBalance(balance, num);
        }
        else if (input.ToLower().Equals("quit") || input.ToLower().Equals("q"))
        {
            Console.WriteLine("Exited the program.");
            break;
        }
    }
}`

export default function Home() {
    return (
        <>
            <Head>
                <title>Control Flow</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className={"card"}>
                    <h3>What is control flow?</h3>
                    <p>
                        Control flow in C# refers to the order in which the statements in a program are executed.
                        C# goes in <b>sequential</b> order unless otherwise specified by different structures.
                        There are 3 main types of control structures.
                    </p>
                    <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-fit">
                        <div className="flex flex-col space-y-1 ml-3">
                            <li>Conditional Statements</li>
                            <li>Iterative Statements (Loops)</li>
                            <li>Exception Handling</li>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <h3>Conditional Statements</h3>
                    <p>Conditional statements include if, else if, else, ternary operators, and switch statements. 
                        You use conditionals in order to determine whether certain information should be provided to the user or certain user should run.
                        Here is an example.
                    </p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={ifstatement} useInlineStyles={true}/>
                    <p>Reading conditional statements as plain English is really useful when trying to figure out what code should do. 
                    In the code example above: 
                    <b> If </b>I am <b>older than 18</b>(sorry for my non US people), I can vote. <b>Else,</b> I cannot vote.</p>
                    <h3>Else If Statements</h3>
                    <p>The else if statement is used when you have multiple conditions to evaluate in a sequential manner. 
                        It's typically used in situations where you want to check a series of conditions, and as soon as one of them evaluates to true, 
                        you want to execute a specific block of code and skip the rest of the conditions. A good example of this is converting a percentage to a letter grade.
                    </p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={elseif} useInlineStyles={true}/>
                    <p>Once one of the conditions are true, it will not check the rest of the conditions.</p>
                    <h3>Ternary Operators</h3>
                    <p>Ternary operators are shorter versions of if-else statements that are to be used when the if statement is short. 
                    The main learning for ternary operators is syntax. The `?` represents the if. If the condition before the `?` is true, the statement after will execute.
                        The `:` represents the else. If the condition before the `?` is not true, then, the statement after the `:` will execute.
                        The functionality is the same as using an if and else statement.</p>
                    <p>Basic Ternary Structure</p>
                    <SyntaxHighlighter style={nightOwl} code={ternarystruct} useInlineStyles={true}/>                            
                    <p>In the example below, I will show the "translations." between using if else and ternary operators.</p>
                    <SyntaxHighlighter language={"csharp"} style={nightOwl} code={ternary} useInlineStyles={true}/>
                    <p>If we were to use the normal if else statement, the code would look like...</p>
                    <SyntaxHighlighter language={"csharp"} style={nightOwl} code={ternarytranslation} useInlineStyles={true}/>
                    <p>As you can see, the functionality is the same but with ternary operators, it is more concise.
                    Ternary operators are more common when making methods and returning. </p>
                    <h3>Switch statements</h3>
                    <p>Switch statements are basically glorified else if statements but there are some differences. 
                    Switch statements help to cover different cases of an expression. 
                    For example, if you provide three different choices for a user, you could use a switch statement.
                    </p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={switchstate} useInlineStyles={true}/>
                    <p>The default option is used if none of the cases are met and will execute the default code. 
                        If a case is met, the default condition is <b>not</b> executed.
                    </p>
                </div>

                <div className={"card"}>
                    <h3>Loops</h3>
                    <p>Loops are used in C# when you want to repeat certain lines of code. There are two main loops in C# loops. 
                        For loops and while loops. For loops are used <b>when you know the number of iterations that will be executed.</b> While loops are used 
                    when you do <b>not</b> know the number of iterations. However, any for loop implementation can be recreated using a while loop. Loops are very 
                        common when iterating through lists and data structures. 
                    </p>
                    <h3>For Loops</h3>
                    <p>Basic For Loop Structure</p>
                    <SyntaxHighlighter style={nightOwl} code={forStruct} useInlineStyles={true}/>
                    <p>The first section of the for loop is the initialization. We initalize a variable that will act like a counter.
                    The second part is the condition. Usually this condition is the limit to the counter. There can be other conditions passed in as well 
                    by using the logical operators(&& and ||).
                    Lastly, the increment section is used, as the name suggests, to increment the counter. The counter gets incremented every single iteration of the for loop.
                    Here is a basic example where we count till 5.</p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={basicFor} useInlineStyles={true}/>
                    <p>Return: </p>
                    <SyntaxHighlighter style={nightOwl} code={forReturn} useInlineStyles={true}/>
                    <p>i is a very common variable used for the counter in for loops. The variable can be named anything you want.
                    In this example, the counter starts at 1 and goes till it is less than or equal to 5. Each time, it prints out the counter.
                    </p>
                    <h4 className={"text-center text-lg"}>
                        <b>Putting it all together: </b> Make it only even numbers from 0 to 10 using <b>only</b> a for loop.
                    </h4>
                    <br/>
                    <h3>While Loops</h3>
                    <p>Basic While Loop Structure</p>
                    <SyntaxHighlighter style={nightOwl} code={whileStruct} useInlineStyles={true}/>
                    <p>While loops are much simpler. The code in the body is ran till the condition is false. Literally. That's it. 
                    A good example of when to use while loops is running a program till a user inputs a specific value(console applications).</p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={basicWhile} useInlineStyles={true}/>
                    <p>Sample return</p>
                    <SyntaxHighlighter style={nightOwl} code={whileReturn} useInlineStyles={true}/>
                </div>
                
                <div className={"card"}>
                    <h3>Break and Continue Statements</h3>
                    <p>Break statements are used to exit a loop early.</p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={breakexample} useInlineStyles={true}/>
                    <p>Return</p>
                    <SyntaxHighlighter style={nightOwl} code={breakReturn} useInlineStyles={true}/>
                    <p>Continue statements are used to skip the iteration of the loop. <b>Not the entire loop</b></p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={continueExample} useInlineStyles={true}/>
                    <p>Return</p>
                    <SyntaxHighlighter style={nightOwl} code={continueReturn} useInlineStyles={true}/>
                </div>
                <div className={"card"}>
                    <h3>Exception Handling</h3>
                    <p>Exception handling is used in order to prevent crashes of your application. Exceptions can occur due to user misinput or bad programming. The <b> try-catch statement </b> 
                        is the main way most programmers handle exceptions. When an exception occurs inside the try block, the program skips down to the catch block and runs whatever code is located in there.
                    </p>
                    <SyntaxHighlighter language = "csharp" style={nightOwl} code={trycatch} useInlineStyles={true}/>
                    <p>Return</p>
                    <SyntaxHighlighter style={nightOwl} code={tryreturn} useInlineStyles={true}/>
                    <p>As you can see, the code does not return a massive error. It just sends what is in the catch block.</p>
                </div>
                
                <div className={"card"}>
                    <h3>Making sure balance does not go negative: Bank Simulation</h3>
                    <p>
                        In our withdraw method, we have to make sure that the account has 
                        enough money to withdraw the specified amount of money. Let's edit the method in order to acccomodate this. 
                    </p>
                    <SyntaxHighlighter language="csharp" style={nightOwl} code={newWithdrawMethod} useInlineStyles={true}/>
                    <p>
                        With this new method, if the user tries to withdraw a value greater than their current balance,
                        a message will inform them about it.
                    </p>
                    <p>
                        Now, in order for this program to be functional, we need the user to be able to input information and that information to reflect accurately in code.
                        We can do this by letting the user input different parameters and for different things to happen.
                    </p>
                    <SyntaxHighlighter language="csharp" style={nightOwl} code={mainMethod} useInlineStyles={true}/>
                </div>
                <NextSection currentArticle={"Control Flow"}/>
            </div>
        </>
    )
}