import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


const carclass = `public class Car 
{
    public string Owner {get; set;}
    public string Make {get; set;}
    public string Model {get;set;}
    public string Color {get;set;}
    public string VIN {get;set;}
    public string RegNumber {get;set;}
}`

const carclassendoffile = `public class Car 
{
    public string Owner {get; private set;}
    public string Make {get; private set;}
    public string Model {get; private set;}
    public string Color {get; private set;}
    public string VIN {get; private set;}
    public string RegNumber {get; private set;}
}`

const carMake = `public string Make {get;set;}`

const accountClass = `public class Account
{
    public string Name { get; private set; }
    public int Age { get; private set; }
    public double Balance { get; private set; }
}`

export default function Home() {
    return (
        <>
            <Head>
                <title>Classes and Objects</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
                <div>
                    <div className={"card"}>
                        <h3>What is Object Oriented Programming(OOP)?</h3>
                        <p>OOP revolves around the idea of defining relationships between objects.
                            Objects can have properties (attributes) and methods (functions) associated with them.
                            With this approach, code is more modular, reusable, and maintainable.
                            Objects are the runtime instance of what C# calls a <b>class.</b>
                            The class serves as the blueprint for creating this instances.
                            When starting C#, it is helpful to make real life analogies.
                            For example, we could represent a car as a class in C#.
                        </p>
                        <p>Let's first ask ourselves, What does a car have?</p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-1/3">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>Owner - a person's name</li>
                                <li>Make - such as Lexus, Honda, Tesla</li>
                                <li>Model - such as Accord, Model Y</li>
                                <li>Color</li>
                                <li>VIN Number</li>
                                <li>Registration number - License plate number</li>
                            </div>
                        </div>
                        <p>Let's convert this to a class now in C#. If you are following this along, make a new C# file
                            and name it Car.cs </p>
                        <p>If you do not know how to add a file in Visual Studio, please look at this <a
                            href="https://ibb.co/6Yh8tNc" target={"_blank"}>image.</a></p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={carclass} useInlineStyles={true}/>
                        <p>Let's inspect each part of one line: </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={carMake} useInlineStyles={true}/>
                        <p>
                            Public is the <b>scope</b> of the variable. It is an example of an access modifier.
                        </p>
                        <h3>Different access modifiers </h3>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>Public variables can be accessed from any class and any external project.</li>
                                <li>
                                    Private variables can only be accessed from the class the variable was defined in.
                                    If we made the VIN number private, the VIN number would only be able to be accessed
                                    from
                                    inside the Car class.
                                </li>
                                <li>
                                    Internal variables can only be accessed from within the DLL. This is mainly used
                                    when
                                    your DLL will
                                    be interacting with other DLLs. Internal variables are public within the scope of
                                    your
                                    DLL
                                    but not available to other DLLs.
                                </li>
                            </div>
                        </div>
                        <p>
                            Modifying the level of access for variables allows certain variables to be hidden so that
                            all data
                            will not be available to everyone. For example, if a user has to be authenticated to see
                            certain information,
                            that information would not be public in the User class. This idea is a concept known as
                            encapsulation.
                        </p>
                        <p>"String" is just the data type of the variable. This is stating that the variable can hold
                            any alphanumeric value.</p>
                        <p>"Make" is the variable name. In this context, Make represents the Make of the car.</p>
                        <h3>Access Modifiers Continued</h3>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={`{get; set;}`}
                                           useInlineStyles={true}/>
                        <p>
                            This allows the variable to be get and set from anywhere because the variable is public.
                            Sometimes, variables only should be set within the class instead of anywhere. We can
                            customize this line
                            in order to only allow for the Make to be edited inside the class but accessed from
                            anywhere, we can edit the line to be
                        </p>
                        <SyntaxHighlighter language="csharp" style={nightOwl} code={`{get; private set;}`}
                                           useInlineStyles={true}/>
                        <p>
                            Now, the make can only be edited inside the Car class but can be accessed from anywhere.
                            This is our first look at access modifiers.
                            This is something that takes some practice. If you want to hide data from the user/other
                            devs, you can use access modifiers to do that.
                        </p>
                    </div>
                    <div className={"card"}>
                            <p>This is our Car class right now. We are going to add onto it on the next page.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl} code={carclassendoffile}
                                               useInlineStyles={true}/>
                    </div>

                    <div className={"card"}>
                        <h3>A Bank Account -&gt; Class</h3>
                            <p>
                                If we continued using our current structure for the bank account, having multiple users will be difficult because for each user,
                                you need (for now) three variables stored. This is where we can use classes in order to make our bank account more scalable so in the future we 
                                can support more than one user. 
                            </p>
                            <p>I made a new file called Account.cs just like Car.cs up above.</p>
                            <p>Here is Account.cs</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={accountClass} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Classes and Objects"}/> 
                </div>
        </>
    )
}