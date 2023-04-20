import React from "react";
import Header from "./components/header";
import "./index.css";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <div className="dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:text-white">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
