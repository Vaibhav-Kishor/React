import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1",{
//     id:"title1" // all the tag atttribute and value comes here
// },"Heading 1");


//! Creating same element using jsx 

//? React element is normal javascript variable which returns jsx or object 
//? end of the day react element is object
const heading = <h1 id="title">Heading</h1>; // this portion is know as jsx


const heading2 = (
//? this is not html, this is html like syntax    
//? react have key concept instead of id
//? jSX => React.createElement => object => HTML(DOM)
//? Babel convert jsx to React element using React.createElement
<h2 id="title2" key="h2"> 
Heading2 
</h2>
//? know as jsx expression
);

//!Everything component in React
//? 1.functional component -NEW 
//? 2.class based component -OLD

//? fucntional component is javascript function that returns some piece of jsx/react element/component/composition of react element
//? Names start with Capital letter,normal convention, it is not mendotary

//! single element
// const HeadingComponent = ()=>{
//     return <h1>React function component</h1>
// };

//! multiple element structure
const Hello =()=>{
    return(
    <div>
        <p>Paragraph</p>
    </div>
    )
}

//! How to use react element inside component
const HeaderComponent =()=>{
    return(
    <div>
        {heading} 
        <Hello/>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
    </div>
    )
}
//! we can remove return keyword
// const HeaderComponent =()=>{
//     <div>
//         <h1>Heading1</h1>
//         <h2>Heading2</h2>
//     </div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

//! when i want render my react element, we write like this 
// root.render(heading);

//! when i want render my react functional component, we write like this 
root.render(<HeaderComponent/>); //? make it like tag, when we render function component