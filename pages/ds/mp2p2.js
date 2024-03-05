import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Mini Project #2 Part 2: Finishing the Todo List</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <h3>Mini Project #2 Part 2: Finishing the Todo List</h3>
                        <p>
                            We are going to finish the todo list with our new knowledge of lists and arrays!
                        </p>
                        <p>Tasks to Finish</p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-fit">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>Store all objectives in a List</li>
                                <li>Allow users to list all tasks that have been added</li>
                                <li>Allow users to edit specific tasks</li>
                                <li>Allow users to delete specific tasks</li>
                            </div>
                        </div>
                        <p>Thank you for looking into this study guide. Hopefully it helped you in a tiny way!</p>
                    </div>
                </div>
</>
)
}