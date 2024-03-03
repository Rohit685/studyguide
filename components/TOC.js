import {useState} from "react";


export default function TOC() {

   const [isSidebarOpen, setSidebarOpen] = useState(false);
   
   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };
   return (
       <>
  <aside className="fixed left-0 p-6 w-240 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-lg">
		<div className="space-y-2">
			<h2 className="text-2xl dark:text-gray-400">Getting Started</h2>
			<div className="flex flex-col space-y-1">
				<a href="/basics/dataandvars">Variables & Data Types</a>
				<a href="/basics/methods">Methods</a>
				<a href="/basics/console">Console Functions</a>
				<a href="/basics/operators">Operators</a>
				<a href="/basics/wws">Working with Strings</a>
				<a href="/basics/controlflow">Control Flow</a>
				<a href="/basics/project">Mini Project</a>
			</div>
		</div>
	</nav>
</aside>
       </>
   )
}