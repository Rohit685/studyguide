import NextSection from "@/components/NextSection";
import Head from "next/head";

export default function HomePage() {
  return (
      <>
          <Head>
              <title>C# Beginner's Guide</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
      <div class={"card"}>
          <div class={"m-5"}><h2 class="text-center text-2xl">The Introductory Guide to C#</h2>
          </div>
          <div>
              <p>
              This guide will teach you the basics of C#. It is recommended that you follow along on your machine. I will be providing code examples for each section of this
              guide. It is also recommended that you copy paste the code examples onto your own project to see if it works as you intended. Also, editing the code examples is really good practice
              in order to really solidify the concepts. At the end of each major section, I have added a mini project. There is not one right answer for this mini project. I have outlined some requirements. 
              If you complete the project, I think you have understood everything in that section.
              </p>
          <a href={"/setupenv"} class={"hover:underline text-blue-300 text-center"}>
            <h2 class={"text-2xl pt-2"}>Next Section: Setting up Development Environment</h2>
          </a>
          </div>
      </div>
          
    </>
  )
}
