import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const code = `public static int Add(int a, int b)
{
    int result = a + b;
    return result;
}`

const prcode = `public static int Add(int a, int b)
{
    return a + b;
}`

const fullCode = `namespace MyFirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Add(2,4));
        }

        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}`

const instanceMethod = `string message = "HELLO";
message.ToLower(); // returns "hello"`
export default function Home() {
    return (
        <>
            <Head>
                <title>C# Methods</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <h3>Methods</h3>
                        <p>In programming, a method is a block of code that performs a specific task or function.
                            Methods are an essential concept. In other coding languages, they are sometimes called
                            functions.
                            They are used to eliminate the need to copy paste code, consequently, reducing the
                            complexity of a program.
                            Here are the main parts of a method:
                        </p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>Method Signature</li>
                                <li>Parameters</li>
                                <li>Body</li>
                                <li>Return statement</li>
                            </div>
                        </div>

                    </div>

                    <div className={"card"}>
                        <h3>Method Signature</h3>
                        <p>The method signature defines the name, return type, and parameters. For now, at the start of
                            all our methods, we will add public static.
                            Later on, we will learn the meaning of what public and static means. Here is an example...
                        </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={'public static int Add(int a, int b)'} useInlineStyles={true}/>
                            <p><b>int</b> is the return type. This means that the method should return a number. Methods can also have no return if the method is <b>void</b>.</p>
                            <p><b>Add</b> is the method name. The method name should be descriptive and accurate. 
                                In this case, the method is adding two numbers which is why we are returning a number. </p>
                            <p><b>(int a, int b)</b> are the parameters. We know they are two integer values based on the data type provided. 
                            These parameters can only be accessed <b>inside the method.</b></p>
                    </div>
                    
                    <div className={"card"}>
                            <h3>Method Body</h3>
                            <p>The method body is enclosed in curly braces and contains the actual code that defines the method's behavior.
                                This code can include statements, variable declarations, loops, conditionals, and more.
                                The method executes its code when it is called or invoked.
                            </p>
                            <p>Continuing from our <b>Add</b> method above, the method signature + method body will look something like this.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl} code={code} useInlineStyles={true}/>
                            <p>You can also combine the two lines to make it look a tiny bit prettier.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl} code={prcode} useInlineStyles={true}/>
                            <h3>Return Statement</h3>
                            <p>If a method has a return type other than void, it should use the return statement to specify the value that it will return to the caller.
                                The return statement can only be used in methods with a non-void return type.
                                Once the return statement is executed, the method exits and returns control to the caller.
                            </p>
                            <h3>Putting it all together</h3>
                            <p>In practice, this is what using the add method might look like.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl} code={fullCode} useInlineStyles={true}/>
                            <p>Return</p>
                            <SyntaxHighlighter style={nightOwl} code={`6`} useInlineStyles={true}/>
                    </div>

                    <div className={"card"}>
                            <h3>Invoking Methods</h3>
                            <p>As you could probably see from the above code, in order to call(or run) the method, 
                                it is: </p>
                            <SyntaxHighlighter style={nightOwl} code={`nameOfTheMethod(any parameters the method might take in);`} 
                                               useInlineStyles={true}/>
                            <p>Some methods may require a class in front of the method or instance variable of a class.</p>
                            <p>Example of static method</p>
                            <SyntaxHighlighter language={"csharp"} style={nightOwl} code={`Console.WriteLine()`} useInlineStyles={true}/>
                            <p>You can also call methods on objects(also known as reference types), such as Strings.
                            We will learn more about the difference between the two and how to tell the difference in the next section.
                            For now, it's important to learn how to create methods and call the methods.</p>
                            <SyntaxHighlighter language={"csharp"} style={nightOwl} code={instanceMethod} useInlineStyles={true}/>
                    </div>
                    
                    <div className={"card"}>
                            <p>C# has a lot of methods built in so that users do not have to reinvent the wheel.
                            Later on, I teach you how to mainpulate strings and different types of data.
                            I also recommend going onto Google to see if a method already exists for what you want to do. 
                            Some good resources are <a href={"https://www.geeksforgeeks.org/"} target={"_blank"}>GeeksForGeeks </a>
                                and <a href={"https://www.w3schools.com"} target={"_blank"}>W3 Schools. </a></p>
                    </div>
                    
                    <NextSection currentArticle={"Methods"}/>
                </div>
        </>
    )
}