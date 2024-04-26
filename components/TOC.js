import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const TOC = () => {
    const session = useSession()
    const supabase = useSupabaseClient()
    return (
        <>
            <div className="navbar rounded-2xl border mb-3">
                <div className="flex justify-evenly flex-1 px-2">
                    <div className="flex flex-wrap items-stretch">
                        <a className="btn btn-ghost rounded-btn" href={"/"}>Home</a>
                        <a className="btn btn-ghost rounded-btn" href={"/setupenv"}>Getting Started</a>
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost rounded-btn">Basics of C#</div>
                            <ul tabIndex="0"
                                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                <li><a href="/basics/dataandvars">Variables & Data Types</a></li>
                                <li><a href="/basics/methods">Methods</a></li>
                                <li><a href="/basics/console">Console Functions</a></li>
                                <li><a href="/basics/operators">Operators</a></li>
                                <li><a href="/basics/wws">Working with Strings</a></li>
                                <li><a href="/basics/controlflow">Control Flow</a></li>
                                <li><a href="/basics/project">Project</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex={"0"} role={"button"} className={"btn btn-ghost rounded-btn"}>Object Oriented
                                Programming
                            </div>
                            <ul tabIndex={"0"}
                                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                <li><a href="/oop/cao">Classes and Objects</a></li>
                                <li><a href="/oop/constructors">Constructors</a></li>
                                <li><a href="/oop/methods">Methods</a></li>
                                <li><a href="/oop/stvsnonst">Static vs Non-Static</a></li>
                                <li><a href="/oop/mp2">Project</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex={"0"} role={"button"} className={"btn btn-ghost rounded-btn"}>Data Structures
                            </div>
                            <ul tabIndex={"0"}
                                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                <li><a href={"/ds/arrays"}>Arrays</a></li>
                                <li><a href={"/ds/lists"}>Lists</a></li>
                                <li><a href={"/ds/mp2p2"}>Project</a></li>
                            </ul>
                        </div>
                        <button className={`btn btn-ghost rounded-btn ${session == null ? 'hidden' : ''}`}>
                            {session != null && session.user.user_metadata.name}
                        </button>
                        <button
                            className={`btn btn-ghost rounded-btn ${session != null ? 'hidden' : ''}`}
                            onClick={() => {
                                window.location.href = '/login'
                            }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TOC