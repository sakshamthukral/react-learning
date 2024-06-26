import React from "react";
import ReactDOM from "react-dom/client";

// JSX :- JavaScript syntax 
// React Element
const title = (
    <h1 className="head" tabIndex="1">
        Namaste React Using JSX🚀
        </h1>
    );

// React Functional Component
const Title = () => (
    <h1 className="head" tabIndex="1">
        Namaste React I'm Title Component🚀
    </h1>
);

// React Component
// const HeadingCompoent1 = () => {
//     return <h1 className="head">Namaste React Functional Component🚀</h1>
// }

const number = 10000;
const HeadingComponent2 = () => (
<div id="container">
    {Title()}
    <h1 className="heading">
        Namaste React Functional Component🚀
    </h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// jsxRoot.render(heading);
root.render(<HeadingComponent2 />);