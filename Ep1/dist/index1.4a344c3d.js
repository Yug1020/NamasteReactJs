// PART 1
// const Heading = React.createElement("h1", {}, "Hello World by React.js");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(Heading) // you will see here that heading is an object
// root.render(Heading);
//either run above code or below code can not run both at a same time
//************************************************************************************************************************************* */
// PART 2
// make following structure using react
// div = parent
//     div = child1
//         h1
//         h2
//     div
//     div = child2
//         h1
//         h2
//     div
// div
const div = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(div) // you will see here that heading is an object
;
root.render(div);

//# sourceMappingURL=index1.4a344c3d.js.map
