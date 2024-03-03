import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Mini Project #2 Part 1: Todo List</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                        <h3>Mini Project #2 Part 1: Todo List</h3>
                        <p>
                            For this project, we are going to make use of the OOP concepts we have learned in the past
                            section.
                            This project is going to have two parts.
                        </p>
                        <p>
                            The first part you are going to complete now.
                            After you learn about basic data structures, you will be able to complete the second part of
                            this mini project.
                        </p>
                        <p>Key Features</p>
                        <div className="space-y-2 bg-gray-700 rounded-2xl p-3 mt-3 w-3/4">
                            <div className="flex flex-col space-y-1 ml-3">
                                <li>Create an <b>Objective Class</b> with whatever you think is important for an objective
                                    you have to complete.
                                    (I am using the word Objective because Task is a native class in C#. Use objective to
                                    avoid conflict.)
                                </li>
                                <div className="flex flex-col space-y-1 ml-3">
                                    <li>After a user creates a task, print out key details about the task. (Learn about
                                        ToString()...I did not teach you this.)
                                    </li>
                                </div>
                            </div>
                        </div>
                        <p>This project will fully come together after you learn about data structures. Good Luck!</p>
                    </div>
                    <NextSection currentArticle={"Mini Project 2"}/>
                </div>
        </>
    )
}