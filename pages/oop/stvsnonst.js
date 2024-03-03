import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Static VS Non-Static</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                            <h3>Difference between Static and Non-Static</h3>
                            <p>
                                As you may have seen, I have been using the keyword <b>static</b> in some cases and 
                                not in other cases. Let's understand the difference.
                            </p>
                            <p>When we write code such as</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Car car = new Car("John Doe", "Honda", "Civic", "White");\ncar.ChangeOwner("Jane Doe");`} useInlineStyles={true}/>
                            <p>
                                We are editing the <b>instance</b> of a car object. 
                                This is dealing with <b>non static</b> variables. 
                            </p>
                            <p>
                                In our current Car class, we do not have any static variables so lets add one. In order to keep track of all cars that are created,
                                we should create a static variable. A static variable is tied to the <b>class</b> not the <b>instance</b> of a class.
                            </p>
                            <p>
                                Right below our non static variables, we will add this line of code
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`public static int NumberOfCars {get; private set;}`} useInlineStyles={true}/>
                            <p>Now, in the constructors, where the objects are created, we have to add a line of code that increments the variable, NumberOfCars.</p>
                            <p>At the end of each constructor, add this line</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`NumberOfCars++;`} useInlineStyles={true}/>                   
                            <p>We can test this out by making two objects in our Program.cs and print out the NumberOfCars.</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Car car = new Car("Rohit", "Honda", "Civic", "white");\nCar car2 = new Car("Rohan", "Honda", "Civic", "white");\nConsole.WriteLine(Car.NumberOfCars);`} useInlineStyles={true}/>
                            <p>Because static variables are tied to the class, to use NumberOfCars, we have to use the class name: Car. <b>NOT</b> an instance of a car.</p>
                            <p>
                                The output of this code is going to be 2. We have made 2 car instances and each time we did, the NumberOfCars variables got incremented.
                                It is very important to understand the use of static and non static variables because classes are the foundation of any C# program.
                            </p>
                    </div>
                    <div className={"card"}>
                            <h3>Bank Account Project</h3>
                            <p>
                                At this moment, there is no need for any type of static variables in the Bank Account simulation. 
                                However, in the past sections, we did remove any static methods and variables we may have had because
                                we converted to using classes and objects.
                            </p>
                    </div>
                    <NextSection currentArticle={"Static vs Non-Static"}/>
                </div>
        </>
    )
}