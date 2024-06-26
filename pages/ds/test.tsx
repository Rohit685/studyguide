import Head from "next/head";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/router";
import Link from "next/link";
import QuizQuestion from "@/components/QuizQuestion";
import React, {useEffect, useState} from "react";
import {Database} from "@/lib/schema";
import NextSection from "@/components/NextSection";

type Stats = Database['public']['Tables']['stats']['Row']

export default function DSTest() {
    const {session, isLoading} = useSessionContext();
    const supabase = useSupabaseClient();
    const router = useRouter();
    const [grabbingPreviousQuestions, setGrabbingPreviousQuestions] = useState<Stats[]>(null);
    
    
    useEffect(() => {
        const fetchTodos = async () => {
            const { data: stats, error } = await supabase
                .from('stats')
                .select('* ')
            if (error) console.log('error', error)
            else setGrabbingPreviousQuestions(stats)
        }
        
        if(!isLoading && session) {
            fetchTodos()
        }
    }, [session])
    
    
    if(isLoading || (session && (!grabbingPreviousQuestions))) {
        return (
            <div className={"flex items-center pt-5"}>
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        )
    }
    
    
    
    if(!session) {
        return (
            <div>
                <h3 className={"bg-transparent"}>This page requires you to <Link href={"/login"}>login</Link>.</h3>
            </div>
        )
    }
    
    return (
        <>
            <Head>
                <title>Data Structures Check of Understanding</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div>
                <h3>Check for Understanding: Arrays & Lists</h3>
                {grabbingPreviousQuestions && grabbingPreviousQuestions.length === 0 && <p className={"mx-auto"}>It is recommended you complete previous questions while logged in.</p>}
                <div className={"card"}>
                    <QuizQuestion question={"How do you access the third element in an array named arr?"} qCode={`int number = ____;`}
                                  aCode={`int number = arr[2];`} explanation={"Because arrays and lists use 0 based index, you have to use index 2 to get the third element."} 
                                  correctAnswer={"arr[2]"}
                                  genericID={981} caseSensitive={false}
                    />
                    <QuizQuestion question={"Which data structure offers dynamic resizing in C#: arrays or lists?"} qCode={undefined} aCode={undefined} 
                                  explanation={"Lists offer dynamic resizing in C#."} correctAnswer={"lists"} genericID={982} caseSensitive={false}
                    />
                    <QuizQuestion question={"What is the method to add an element to the end of a list in C#?"} qCode={`myList.___();`} aCode={`myList.Add();`} 
                                  explanation={"The `Add` method is used to add an element to the end of a list in C#."} correctAnswer={"Add"} genericID={983}
                                  caseSensitive={true}
                    />
                    <QuizQuestion question={"True or false: Arrays and lists use the same property to get the number of elements."} qCode={undefined} aCode={undefined} 
                                  explanation={"False. Arrays use the Length property while lists use the Count property"} correctAnswer={"false"} genericID={984}
                                  caseSensitive={false}
                    />
                    <QuizQuestion question={"Initalize an array of 3 strings with the name of stringArr."} qCode={undefined} aCode={`string[] stringArr = new string[3];`} 
                                  explanation={undefined} correctAnswer={`string[]spacestringArr = newspacestring[3];`} genericID={985}
                                  caseSensitive={false}
                    />
                    {grabbingPreviousQuestions && !grabbingPreviousQuestions.find(stat => stat.question_id === 5)?.is_correct ? 
                        <QuizQuestion
                            question={"How many times does the Remove method remove an element from a list if there are multiple occurrences of that element?"}
                            qCode={undefined} aCode={undefined} explanation={"The Remove method only removes the first occurence of the specified element."} correctAnswer={"1"}
                            genericID={986} caseSensitive={false}                        
                        /> : null
                    }
                </div>
                <NextSection currentArticle={"Check for Understanding"}/>
            </div>
            
            
        
        </>
    )
}