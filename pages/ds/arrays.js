import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";
import QuizQuestion from "@/components/QuizQuestion";


const declare = `int[] myArray`
const init = `int[] myArray = new int[5]; // Creates an array of 5 integers
int[] myArray = { 1, 2, 3, 4, 5 }; // Initializes an array with values`
const getElement = `myArray[0] // 0 is the INDEX and will return the FIRST element in the array`
const length = `myArray.Length`
const forloop = `for (int i = 0; i < myArray.Length; i++)
{
    Console.WriteLine($"Element at index {i}: {myArray[i]}");
}`
const quizQuestionAnswer = `for (int i = 0; i < myArray.Length; i++)
{
    if(i % 2 == 0) {
        Console.WriteLine($"Element at index {i}: {myArray[i]}");
    }    
}`

const quizQuestionQ = `for (int i = 0; i < ______; i++)
{
    if(i % 2 == 0) {
        Console.WriteLine($"Element at index {i}: {myArray[i]}");
    }    
}`

const foreachstruct = `foreach (elementType variable in collection)
{
    // Statements to be executed for each element
}`
const foreach = `foreach (int num in myArray)
{
    Console.WriteLine($"{num}");
}`
export default function Home() {
    return (
        <>
            <Head>
                <title>C# Arrays</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                            <h3>Arrays</h3>
                            <p>
                                In C#, an array is a data structure that stores a <b>fixed and ordered</b> collection of elements of the <b>same type</b>.
                                Arrays are immutable and the size <b>cannot</b> be changed after initialization.
                            </p>
                            <h3>Declaring an array</h3>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={declare} useInlineStyles={true}/>
                            <p>
                                In order to actually make the array, there are two options. Intialize the array with only the size or
                                intialize the array with all components. If you choose the second option, the size is automatically detected.
                                Here are both options
                            </p>
                            <h3>Initializing an array</h3>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={init} useInlineStyles={true}/>
                            <h3>Accessing individual elements of an array</h3>
                            <p>
                                In order to access any element of an array, we use different notation. Instead of using a period, we use brackets( [ ] ).
                                Each element has an index associated and this is the position of it in the array. Unlike counting, this index <b>starts at 0</b> NOT at 1.
                                With this in mind, we can access elements.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={getElement} useInlineStyles={true}/>
                            <p>
                                One important attribute that is used regulary when dealing with arrays is Length. This is <b>not</b> a method.
                                Therefore when using it, we do not need (). Arrays can get confusing when dealing with indices and the length. 
                                The length is always one more than the last index. In myArray, the final index is 4. However, the length of the array is 5 
                                because there are 5 total elements. Here is how to use Length.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={length} useInlineStyles={true}/>
                            <h3>Looping through arrays</h3>
                            <p>
                                Data structures is where the knowledge of loops and conditionals really get tested. 
                                There are two main ways you can loop through arrays. For loop and for each loop. 
                                I mean...you can use a while loop but...don't.
                            </p>
                            <p>For loop</p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={forloop} useInlineStyles={true}/>
                            <p>
                                For each loop. I never went through for each loops because it is only useful when learning about data structures and collections.
                                Here is the basic structure of a for loop and how we can use it in this array example.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={foreachstruct} useInlineStyles={true}/>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={foreach} useInlineStyles={true}/>
                            <p>
                                As you can maybe see, with for each loops, you do <b>not</b> get access to the index the element has. Therefore, only use a for each 
                                loop when you know that the index is <b>not</b> necessary.
                            </p>
                            <QuizQuestion question={"Fill in the blank so that this code block only prints out numbers at an even index from the array, myArray."} qCode={quizQuestionQ} aCode={quizQuestionAnswer} 
                                          explanation={"Using the index 'i' and modulus operator, we can decide whether to that index is even by checking whether the remainder is 0" +
                                              "After determining whether to use the index, we use string concatenation to get the element at that index."} genericID={4}
                                        correctAnswer={"myArray.Length"}/>
                    </div>
                    <NextSection currentArticle={"Arrays"}/>
                </div>
        </>
    )
}