// const heading = React.createElement("h1", {id:"heading"},"Hello World from React!")
// console.log(heading) // object
// const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(heading); // will convert the JS object to the HTML element and render it to the DOM

// {/* <div id="parent">
//     <div id="child1">
//         <h1>This it the Final Heading</h1>
//     </div>

// </div> */}


// So it's like a JS object inside another JS object inside another JS object at the end
headingObject1 = React.createElement("h1",{}, "This is the h1 Tag");
headingObject2 = React.createElement("h2",{}, "This is the h2 Tag");

childObject1 = React.createElement("div", {id:"child1"}, [headingObject1, headingObject2]);
childObject2 = React.createElement("div", {id:"child2"}, [headingObject1, headingObject2]);
parentObject = React.createElement("div", {id:"parent"}, [childObject1, childObject2]);
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentObject); // It will replace the existing content of the root element with the new content insted of appending it. 
// ReactElement(Object) => HTML (Browser Understands)


// JSX
// But the above code as you can see seems to be bit complex, instead HTML looks more simpler, but we usually don't use React in this way, it's just to explain the core of the react. We use JSX to write the code in a more simpler way.