import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ToDo from "./src/components/ToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <ToDo /> */}
    </>
  );
};

root.render(<AppLayout />);
