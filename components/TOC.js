import {useState} from "react";


const TOC = () => {

   const [isSidebarOpen, setSidebarOpen] = useState(false);
   
   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };
   
   return ( 
       <>
		   <div className={`bg-background rounded-2xl border mb-3`}>
			   {/*<div className={`px-6 pb-36 my-1 w-240 overflow-y-scroll h-screen text-lg list-disc ${isSidebarOpen ? 'block' : 'hidden'}`}>*/}
			   {/*		<div className="flex flex-col space-y-1">*/}
			   {/*			<a href="/" className="text-2xl dark:text-gray-400">Home</a>*/}
			   {/*			<a href="/setupenv" className="text-2xl dark:text-gray-400">Getting Started</a>*/}
			   {/*			<a href="/basics/" className="text-2xl dark:text-gray-400 mt-2">Basics Of C#</a>*/}
			   {/*			<li><a href="/basics/dataandvars">Variables & Data Types</a></li>*/}
			   {/*			<li><a href="/basics/methods">Methods</a></li>*/}
			   {/*			<li><a href="/basics/console">Console Functions</a></li>*/}
			   {/*			<li><a href="/basics/operators">Operators</a></li>*/}
			   {/*			<li><a href="/basics/wws">Working with Strings</a></li>*/}
			   {/*			<li><a href="/basics/controlflow">Control Flow</a></li>*/}
			   {/*			<li><a href="/basics/project">Mini Project</a></li>*/}
			   {/*		</div>*/}
			   {/*		<a href="/oop/" className="text-2xl dark:text-gray-400">Object Oriented Programming</a>*/}
			   {/*		<div className="flex flex-col space-y-1">*/}
			   {/*			<li><a href="/oop/cao">Classes and Objects</a></li>*/}
			   {/*			<li><a href="/oop/constructors">Constructors</a></li>*/}
			   {/*			<li><a href="/oop/methods">Methods</a></li>*/}
			   {/*			<li><a href="/oop/stvsnonst">Static vs Non-Static</a></li>*/}
			   {/*			<li><a href="/oop/mp2">Mini Project 2 Part 1</a></li>*/}
			   {/*		</div>*/}
			   {/*		<a href="/ds/" className="text-2xl dark:text-gray-400 mt-2 mb-1">Data Structures</a>*/}
			   {/*		<div className="flex flex-col space-y-1">*/}
			   {/*			<li><a href={"/ds/arrays"}>Arrays</a></li>*/}
			   {/*			<li><a href={"/ds/lists"}>Lists</a></li>*/}
			   {/*			<li><a href={"/ds/mp2p2"}>Mini Project 2 Part 2</a></li>*/}
			   {/*		</div>*/}
			   {/*</div>*/}
			   <nav className="nav justify-between py-2 lg:flex-wrap lg:justify-start lg:py-4">
				   <div className="flex w-full flex-wrap items-center px-3">
					   <div className="items-center lg:!flex lg:basis-auto">
						   <ul className="list-style-none flex flex-col ps-0 lg:flex-row">
							   <li className="mb-4 lg:mb-0 lg:pe-2">
								   <a className="lg:px-2" href="/">Home</a>
							   </li>
							   <li className="mb-4 lg:mb-0 lg:pe-2">
								   <a className="lg:px-2" href="/setupenv">Getting Started</a>
							   </li>
							   <li className="mb-4 lg:mb-0 lg:pe-2">
								   <a className="lg:px-2" href="/basics">Basics of C#</a>
							   </li>
							   <li className="mb-4 lg:mb-0 lg:pe-2">
								   <a className="lg:px-2" href="/oop">Object Oriented Programming</a>
							   </li>
							   <li className="mb-4 lg:mb-0 lg:pe-2">
								   <a className="lg:px-2" href="/ds">Data Structures</a>
							   </li>
						   </ul>
					   </div>
				   </div>
			   </nav>

		   </div>
	   </>
   )
}

export default TOC