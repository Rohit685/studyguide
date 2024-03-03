import Head from 'next/head';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/prism';
import NextSection from "../components/NextSection";

const code = `namespace MyFirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`
export default function Home() {
    return (
        <>
            <Head>
                <title>Setting up Dev Environment</title>
                <meta name="description" content="Beginners Study Guide to C#" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                    <div className={"card"}>
                            <h3 class={"text-2xl text-center"}>Setting up your development environment</h3>
                            <p>An Integrated Development Environment (IDE) in C# is a powerful software tool designed to streamline and enhance the entire development process. 
                                It provides a central workspace where programmers can write, edit, compile, and debug their C# code. 
                                Additionally, C# IDEs offer features like code completion, project management, and error checking, making it easier for developers to create, test, and maintain C# applications efficiently.
                                Visual Studio 2022 is one of the most popular IDEs for C#. <br/>The install link &nbsp; -&gt; &nbsp;
                                <a href={"https://visualstudio.microsoft.com/downloads/"}>
                                    Install Visual Studio 2022
                                </a>
                            </p>
                            
                            <h3 class={"text-2xl text-center"}>Configure Visual Studio</h3>
                            <p>You will be greeted by the screen below. Please make sure to check <b>.NET Desktop Development.</b></p>
                            <img src={"/networkload.png"} alt={"Image showing what workloads to install"} width={"100%"}></img>
                        </div>
                    <div className={"card"}>
                        <h3 class={"text-2xl text-center"}>Create your first project</h3>
                             <p>It is time to create your own first project. Almost time to start coding. Click on console app
                                and make sure it shows <b>C#</b> in the icon. Follow the screenshots below and click on <b>Next</b> after each step is complete on your end.</p>
                            <img src={"/consoleapp.png"} alt={"Image showing what project to create"}></img>
                            <img src={"/nameproject.png"} alt={"Image showing what how to name the project"}></img>
                            <img src={"/additionalinfo.png"} alt={"Image showing which framework to use"}></img>
                    </div>
                    <div className={"card"}>
                        <h3 class={"text-2xl text-center"}>Hello World!</h3>
                            <p>You should be greeted with a file that has this code inside of it.</p>
                            <SyntaxHighlighter language="csharp" style={nightOwl}  code={code} useInline={true}/>
                            <p> Visual Studio's default file name is <b>Program.cs</b></p>
                            <p>In order to run your first lines of code, press <b>the button boxed in</b> the photo below.</p>
                            <img src={"/runningprogram.png"} alt={"Image showing which button to click in order to run the program"}></img>
                            <p>All the code we will write should be in between the curly brackets that are on line 6 and 8. </p>
                    </div>
                    <NextSection currentArticle={"Setting up Dev Environment"}/>
            </div>
        </>
    )
}