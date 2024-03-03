import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import NextSection from "../../components/NextSection";

const carconstructor = `public Car(string owner, string make, string model, string color, string vin, string regNumber) {
    Owner = owner;
    Make = make;
    Model = model;
    Color = color;
    VIN = vin;
    RegNumber = regNumber;
}`

const carconstructorwithoutvin = `public Car(string owner, string make, string model, string color) {
    Owner = owner;
    Make = make;
    Model = model;
    Color = color;
}`

const accountConstructor = `public Account(string name, int age, double balance) {
    Name = name;
    Age = age;
    Balance = balance;
}`

export default function Home() {
    return (
        <>
            <Head>
                <title>Constructors</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
                <div>
                    <div className={"card"}>
                            <h3>Constructors</h3>
                            <p>
                                A constructor is a special type of method that is automatically called
                                when the object is instantiated or created. Its purpose is to initalize the 
                                object's state. The constructor <b>has to be</b> the same name as the class name.
                                For our Car class, it would have to be named Car. 
                                The basic constructor for our car class from the last page would be this: 
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={carconstructor} useInlineStyles={true}/>
                            <p>
                                Now sometimes, we want to give the user to option to insert certain parameters but not other parameters. 
                                This is where overloading comes into play. Overloading constructors allows us to have multiple constructors. 
                                For example, in this case if we want the user to able to "make" a car without having a VIN number, we can 
                                make another constructor below our first one like this: 
                            </p>
                            <SyntaxHighlighter language = "csharp" style={nightOwl} code={carconstructorwithoutvin} useInlineStyles={true}/>
                            <p>You may be asking, "How does C# know what constructor to use?"</p>
                            <p>
                                If you look at the first constructor, the parameter list contains 6 strings. The second constructor contains 4 strings.
                                The name of the parameter <b>does not matter.</b> The only things that matter is the data type(string, int, double) and the order.
                            </p>
                            <p>
                                If you try and make a new constructor with 6 strings, C# will give you an error saying that this is not possible.  
                                <a href="https://ibb.co/9btdxYs" target={"_blank"}>ERROR</a>
                            </p>
                            <p>As the image shows, the error says "parameter types" not parameter names.</p>
                    </div>
                
                <div className={"card"}>
                        <p>Now that we can actually create Cars using our constructor, lets do that in our Program.cs.</p>
                        <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Car car = new Car("John Doe", "Honda", "Civic", "White");`} useInlineStyles={true}/>
                        <p>Congratulations, you just made your first object. We call this an <b>instance</b> of the car class. 
                            But....we cannot do anything with that object. Let's do that in the next section.</p>
                </div>
                
                <div className={"card"}>
                        <h3>Created our first Account</h3>
                        <p>Now that we have made all the variables asociated with an account, let's make the constructor</p>
                        <SyntaxHighlighter language = "csharp" style={nightOwl} code={accountConstructor} useInlineStyles={true}/>
                        <p>
                            Now that we have made the constructor, we can actually initalize an object in our Main.cs.
                        </p>
                        <SyntaxHighlighter language = "csharp" style={nightOwl} code={`Account account = new Account("John Doe", 13, 500.00);`} useInlineStyles={true}/>
                        <p>
                            With this new class, we can now make accounts on the fly without having to intialize multiple variables 
                            like we were doing before. In the next section, we will refactor(redo to make better) the Main.cs class 
                            so that it uses the Account class instead of the three variables we made before.
                        </p>
                </div>
                <NextSection currentArticle={"Constructors"}/>
                </div>
        </>
    )
}