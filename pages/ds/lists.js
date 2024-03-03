import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const getElement = `myList[0] // 0 is the INDEX and will return the FIRST element in the list`

const code = `List<int> list = new List<int>() // initialize List with elements
{
    1,
    2,
    3,
    4,
    4,
    5,
};

list.Remove(4); // removing the first occurence of 4 from the list

foreach (var item in list)
{
    Console.WriteLine(item);
}
Console.WriteLine("------------------");

list.Add(13); // Adding this element at the END of the list

for(int i = 0; i < list.Count;i++)
{
    Console.WriteLine(list[i]);
}
Console.WriteLine("------------------");`
export default function Home() {
    return (
        <>
            <Head>
                <title>Lists in C#</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div>
                    <div className={"card"}>
                            <h3>Lists</h3>
                            <p>
                                In this section, we will take a look at lists that are fairly similar to arrays conceptually but different syntax wise.
                            </p>
                            <h3>Similarities</h3>
                            <p>
                                Just like arrays, a list stores one type of data in an ordered matter. 
                                Just like arrays, lists have indicies which start at 0.
                                Getting elements at a certain index is also the same in the list.
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={getElement} useInlineStyles={true}/>
                            <p style={{fontSize:"0.86rem"}}>Did you know? -&gt; Lists are made by using arrays just with added functionality.</p>
                            <p>Unfortunately, coding lists are pretty different than arrays. Also, conceptually, there are key differences</p>
                            <h3>Differences</h3>
                            <p>
                                One main difference when using lists is that the size of the list <b>can change.</b> (Not really but, for now, think about it like that)
                                Consequently, you cannot initialize a list with a size. C# does that for you. 
                                You can also <b>remove</b> elements from a list much easier than in an array.
                                Instead of going step by step, I will show you some code that is common practice when dealing with lists.
                                Pay attention to the differences in syntax. The code will be commented. I encourage you to play around with the code yourself.
                            </p>
                            <h3>Code Example</h3>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={code} useInlineStyles={true}/>
                    </div>
                    <NextSection currentArticle={"Lists"}/>
                </div>
        </>
    )
}