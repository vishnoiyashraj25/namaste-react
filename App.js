/*<div id:"parent">
    <div id="child">
        <h1>h11 </h1>
        <h2>hello</h2>
</div>*/


const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"h1 tag"),
React.createElement("h2",{},"h2 tag")]));
//const heading=React.createElement("h1",{id:"heading"},"hello react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
