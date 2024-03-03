import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


const changeowner = `public void ChangeOwner(string newOwner)
{
    Owner = newOwner;
}`

const newMethodsInAccount = `public double DepositBalance(double balance, double additionalBalance)
{
    Console.WriteLine($"Deposited {additionalBalance}.");
    return balance + additionalBalance;
}

public double WithdrawBalance(double balance, double additionalBalance)
{
    if (balance - additionalBalance < 0)
    {
        Console.WriteLine($"Funds insufficient\nMax Funds that can be deposited: {balance}");
        return balance;
    }
    Console.WriteLine($"Withdrew {additionalBalance}.");
    return balance - additionalBalance;
}`

const maincs = ` static void Main(string[] args)
{
    string name = "John Doe";
    int age = 13;
    double balance = 500.00;
    Account account = new Account(name, age, balance);
    while (true) { 
    
        Console.Write($"Hello {name}. You currently have \${balance}. If you want to deposit money, enter deposit. 
        To withdraw, enter withdraw. If you would like to leave the program, type in quit or q. ");
        var input = Console.ReadLine();
        if (input.ToLower().Equals("deposit"))
        {
            Console.Write("How much money would you like to deposit?: ");
            var num = Convert.ToInt32(Console.ReadLine());
            account.DepositBalance(num);
        }
        else if (input.ToLower().Equals("withdraw"))
        {
            Console.Write("How much money would you like to withdraw?: ");
            var num = Convert.ToInt32(Console.ReadLine());
            account.WithdrawBalance(num);
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
                <title>Methods in C#</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                   <div className={"card"}>
                            <h3>What are methods?</h3>
                            <p>
                                Methods are blocks of code that manipulate the objects that they are created in. 
                                In our car example, we can make a ChangeOwner method that will change the name of the owner.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={changeowner} useInlineStyles={true}/>
                            <p>
                                This method is taking the instance of Car that is called from and changes the Owner to the variable newOwner.
                                Now you may be asking yourself, how does C# know what instance of Car to use? Let me answer that.
                            </p>
                            <p>
                                On the last page, we created our first object: Car. Here was that code.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Car car = new Car("John Doe", "Honda", "Civic", "White");`} useInlineStyles={true}/>
                            <p>In order to change the owner of this car object, we have to use the variable, car.</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`car.ChangeOwner("Jane Doe");`} useInlineStyles={true}/>
                            <p>
                                In order to see our new owner name, lets access the new owner name by using the same syntax.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Console.WriteLine(car.Owner);`} useInlineStyles={true}/>
                            <p><b>Note:</b> we did not need parenthesis because Owner is not a method but a variable inside the Car class.</p>
                            <p>This should return <b>Jane Doe</b>.
                            </p>
                    </div>
                   <div className={"card"}>
                            <h3>Adding functions to our bank account class</h3>
                            <p>In our bank account class, we added the DepositBalance and WithdrawBalance into our Program.cs. 
                                Now that we know how to manipulate objects, we can add it to the Account.cs instead.
                                Here is how we will add it to the Account.cs
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={newMethodsInAccount} useInlineStyles={true}/>
                            <p>In our Program.cs, we can now edit the if statements to edit the account instead of having 3 variables. Here is the new Main.cs</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={maincs} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Methods/Functions"}/>
                </div>
        </>
    )
}