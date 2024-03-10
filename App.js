import React from "react";
import ReactDOM from "react-dom/client";

const reactelement = React.createElement(
  "h1",
  { id: "Heading" },
  "Welcome Avinash"
);
const Element2 = () => {
  <h1 class="heading" tableIndex="7">
    {"JSX Heading"}
  </h1>;
};

const Element3 = () => {
  return <h1>This is a functional components element3</h1>;
};

const Element4 = () => <h1>This is a functional components , short hand4</h1>;
const Element5 = () => {
  return <h1>This is a functional components , short hand5</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Element2 />
    {Element3()}
    <Element4></Element4>
    <Element5 />
    <h1>This is compoenent with out return</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
