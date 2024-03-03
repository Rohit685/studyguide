import {useState} from "react";


const TOC = () => {

   const [isSidebarOpen, setSidebarOpen] = useState(false);
   
   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };
   
   return ( 
       <>
		   <button class="bg-blue-500 ml-6 fixed left-0 py-2 px-4 hover:bg-blue-700 text-white font-bold rounded" onClick={toggleSidebar}>{isSidebarOpen ? "Close" : "Open"} Sidebar</button>
  			<div className={`fixed left-0 p-6 bg-background rounded-2xl max-2xl:border mt-10 w-240 w-72 overflow-y-scroll h-full text-lg text-wrap list-disc ${isSidebarOpen ? 'block' : 'hidden'}`}>
					<a href="/" className="text-2xl dark:text-gray-400 mb-1">Home</a>
					<h2 className="text-2xl dark:text-gray-400 mb-1">Getting Started</h2>
					<div className="flex flex-col space-y-1">
						<li><a href="/setupenv" className={"text-wrap"}>Setting up Development Environment</a></li>
					</div>
					<a href="/basics/" className="text-2xl dark:text-gray-400 mt-2 mb-1">Basics Of C#</a>
					<div className="flex flex-col space-y-1">
						<li><a href="/basics/dataandvars">Variables & Data Types</a></li>
						<li><a href="/basics/methods">Methods</a></li>
						<li><a href="/basics/console">Console Functions</a></li>
						<li><a href="/basics/operators">Operators</a></li>
						<li><a href="/basics/wws">Working with Strings</a></li>
						<li><a href="/basics/controlflow">Control Flow</a></li>
						<li><a href="/basics/project">Mini Project</a></li>
					</div>
					<a href="/oop/" className="text-2xl dark:text-gray-400">Object Oriented Programming</a>
					<div className="flex flex-col space-y-1">
						<li><a href="/oop/cao">Classes and Objects</a></li>
						<li><a href="/oop/constructors">Constructors</a></li>
						<li><a href="/oop/methods">Methods/Functions</a></li>
						<li><a href="/oop/stvsnonst">Static vs Non-Static</a></li>
						<li><a href="/oop/mp2">Mini Project 2 Part 1</a></li>
					</div>
					<a href="/ds/" className="text-2xl dark:text-gray-400 mt-2 mb-1">Data Structures</a>
					<div className="flex flex-col space-y-1">
						<li><a href={"/ds/arrays"}>Arrays</a></li>
						<li><a href={"/ds/lists"}>Lists</a></li>
						<li><a href={"/ds/mp2p2"}>Mini Project 2 Part 2</a></li>
					</div>
			</div>
	   </>
   )
}

export default TOC