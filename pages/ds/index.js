import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>C# Data Structures</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <p>
                            In this section, you will learn the final piece of basic C#, data structures. You will
                            learn:
                        </p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 w-fit">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li><a href={"/ds/arrays"}>Arrays</a></li>
                                <li><a href={"/ds/lists"}>Lists</a></li>
                                <li><a href={"/ds/mp2p2"}>Project</a></li>
                            </div>
                        </div>
                        <p>
                            After learning all of this, I recommend you complete the todo list to ensure understanding
                            of data structures.
                        </p>
                    </div>
                    <NextSection currentArticle={"Data Structures"}/>
                </div>
</>
)
}