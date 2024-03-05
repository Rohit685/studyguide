import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const code = `// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");`
export default function Home() {
    return (
        <>
            <Head>
                <title>C# Basics</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <p>
                            In this section, you will learn the basics of C#. You will learn: 
                        </p>
                        <nav className="space-y-8 text-lg">
                            <div className="space-y-2 bg-gray-700 rounded-2xl p-3">
                                <div className="flex flex-col space-y-1">
                                    <li><a href="/basics/dataandvars">Variables & Data Types</a></li>
                                    <li><a href="/basics/methods">Methods</a></li>
                                    <li><a href="/basics/console">Console Functions</a></li>
                                    <li><a href="/basics/operators">Operators</a></li>
                                    <li><a href="/basics/wws">Working with Strings</a></li>
                                    <li><a href="/basics/controlflow">Control Flow</a></li>
                                    <li><a href="/basics/project">Project</a></li>
                                </div>
                            </div>
                        </nav>
                        <p>After learning all of this, I will give you a project that I recommend you
                            complete to ensure complete understanding of these topics.
                        </p>
                        <p>I will also start making a Bank Simulation where I will explain what I am
                            doing step by step.
                            This will allow you to see how the concepts you are learning
                            apply to real projects that you can make in C#. </p>
                    </div>
                    <NextSection currentArticle={"C# Basics"}/>
                </div>
        </>
    )
}