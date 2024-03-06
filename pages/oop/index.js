import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Object Oriented Programming</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <p>In this section, you will learn the Object Oriented Programming. The core principles
                            of how a C# project is made. You will learn: </p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 w-fit">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li><a href="/oop/cao">Classes and Objects</a></li>
                                <li><a href="/oop/constructors">Constructors</a></li>
                                <li><a href="/oop/methods">Methods</a></li>
                                <li><a href="/oop/stvsnonst">Static vs Non-Static</a></li>
                                <li><a href="/oop/mp2">Project</a></li>
                            </div>
                            
                        </div>
                        <p>After learning all of this, I will give you a project that I recommend you complete to ensure
                            complete understanding of these topics.</p>
                    </div>
                    <NextSection currentArticle={"Object Oriented Programming"}/>
                </div>
        </>
    )
}