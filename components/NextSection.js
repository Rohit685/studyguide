function NextSection({currentArticle}) {
    return (
        <a href={getNextArticleLink(currentArticle)} class={"hover:underline text-blue-300 text-center"}>
            <h2 class={"text-2xl"}>Next Section: {getNextArticle(currentArticle)}</h2>
        </a>
    )
}
const tocOrder = [
    "Setting up Dev Environment",
    "Variables and Data Types",
    "Methods",
    "Console Functions",
    "Operators",
    "Working with Strings",
    "Control Flow",
    "Mini Project 1",
    "Classes and Objects",
    "Constructors",
    "Methods/Functions",
    "Static vs Non-Static",
    "Mini Project 2",
    "Arrays",
    "Lists",
    "Check for Understanding",
    "Mini Project 2 Part 2",
]

const tocDict = {
    "Setting up Dev Environment" : "/setupenv",
    "C# Basics" : "/basics/",
    "Variables and Data Types" : "/basics/dataandvars",
    "Methods" : "/basics/methods",
    "Console Functions" : "/basics/console",
    "Operators" : "/basics/operators",
    "Working with Strings" : "/basics/wws",
    "Control Flow" : "/basics/controlflow",
    "Mini Project 1" : "/basics/project",
    "Object Oriented Programming" : "/oop",
    "Classes and Objects" : "/oop/cao",
    "Constructors" : "/oop/constructors",
    "Methods/Functions" : "/oop/methods",
    "Static vs Non-Static" : "/oop/stvsnonst",
    "Data Structures" : "/ds",
    "Mini Project 2" : "/oop/mp2",
    "Arrays" : "/ds/arrays",
    "Lists" : "/ds/lists",
    "Check for Understanding" : "/ds/test",
    "Mini Project 2 Part 2" : "/ds/mp2p2",
}

export function getNextArticle(currentArticle) {
    let found = false;
    let foundIndex = -1;
    for(let i = 0; i < tocOrder.length && !found; i++) {
        if(tocOrder[i].trim() === currentArticle.trim()) {
            foundIndex = i;
            found = true;
        }
    }
    return found ? tocOrder[foundIndex + 1] : null;
}

export function getNextArticleLink(currentArticle) {
    let name = getNextArticle(currentArticle);
    if(name === null) {
        return "/"
    }
    return tocDict[name];
}

export default NextSection