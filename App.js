import React from "react";
import ReactDOM from "react-dom";

/*React Element
const jsxheading = (
    <h1 id="heading">React Element using JSX</h1>
);
console.log(jsxheading); // object
*/

const Title = () => (
    <h1 id="heading">React Title Component</h1>
);

//React Functional Component
const HeaderComponent = () => (
    <div id="container">
        <Title />
        <h1 id="hading">React Funtional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);